@echo off
echo 🛠️ Allvao Projesi Muhurleniyor...
git add .
set /p msg="Degisiklik notu (bos birakirsan 'Guncelleme' yazilir): "
if "%msg%"=="" set msg=Guncelleme: %date% %time%
git commit -m "%msg%"
echo 🚀 Kodlar GitHub'a firlatiliyor...
git push origin main
echo ✅ Islem Tamamlandi! Allvao Guncellendi.
pause