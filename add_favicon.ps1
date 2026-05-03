$faviconTag = '    <link rel="icon" type="image/png" href="assets/images/favicon.png" />'
$files = Get-ChildItem -Path "." -Filter "*.html"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -notmatch 'favicon') {
        $content = $content -replace '(<meta charset="UTF-8"\s*/>)', ('$1' + "`n" + $faviconTag)
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.Name)"
    } else {
        Write-Host "Skipped (already has favicon): $($file.Name)"
    }
}

Write-Host "Done!"
