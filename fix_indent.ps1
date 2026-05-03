$files = Get-ChildItem -Path "." -Filter "*.html"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Standardize indentation of the footer block
    # Remove excessive leading whitespace before <footer and ensure it's properly indented
    $content = $content -replace '(?m)^\s+<footer\b', '    <footer'
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
}

Write-Host "Indentation standardized."
