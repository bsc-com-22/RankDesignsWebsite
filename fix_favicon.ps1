$faviconTag = '    <link rel="icon" type="image/png" href="assets/images/favicon.png" />'
$files = Get-ChildItem -Path "." -Filter "*.html"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Fix the bad inline favicon (literal backtick-n was inserted instead of newline)
    # Pattern: <meta charset="UTF-8" />`n    <link rel="icon".../>
    $bad = '<meta charset="UTF-8" />`n    <link rel="icon" type="image/png" href="assets/images/favicon.png" />'
    $good = "<meta charset=`"UTF-8`" />`r`n$faviconTag"
    
    if ($content -match [regex]::Escape($bad)) {
        $content = $content.Replace($bad, $good)
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Fixed: $($file.Name)"
    }
    else {
        Write-Host "Skipped (no bad pattern found): $($file.Name)"
    }
}

Write-Host "Done!"
