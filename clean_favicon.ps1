$files = Get-ChildItem -Path "." -Filter "*.html"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Remove stray literal backtick-n at end of charset line
    if ($content -match '<meta charset="UTF-8" />`n\r\n') {
        $newContent = $content -replace '<meta charset="UTF-8" />`n\r\n', "<meta charset=`"UTF-8`" />`r`n"
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "Cleaned: $($file.Name)"
    }
    else {
        Write-Host "OK: $($file.Name)"
    }
}

Write-Host "Done!"
