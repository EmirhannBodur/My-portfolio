# Android Developer Portfolio

Modern ve profesyonel Android uygulama geliştiricisi portföy sitesi. Açık/koyu tema desteği ve Türkçe/İngilizce dil seçenekleri ile responsive tasarım.

## Özellikler

- 🌙 **Açık/Koyu Tema**: Kullanıcı tercihi ile tema değiştirme
- 🌍 **Çoklu Dil Desteği**: Türkçe ve İngilizce dil seçenekleri
- 📱 **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- 🎨 **Android Teması**: Material Design prensipleri ile modern tasarım
- ⚡ **Performans**: Hızlı yükleme ve smooth animasyonlar
- 🔧 **Kolay Özelleştirme**: Basit HTML yapısı ile kolay düzenleme

## Teknolojiler

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Roboto)

## Kurulum

1. Dosyaları bilgisayarınıza indirin
2. `index.html` dosyasını bir web tarayıcısında açın
3. Siteyi özelleştirmek için aşağıdaki bölümleri düzenleyin

## Özelleştirme

### Kişisel Bilgiler

`index.html` dosyasında aşağıdaki bölümleri düzenleyin:

#### İsim Değiştirme
```html
<span class="name">[İsminiz]</span>
```

#### Hakkımda Bölümü
```html
<div class="about-text">
    <!-- Hakkımda içeriği buraya gelecek -->
    <p data-tr="Buraya hakkınızda bilgi yazacaksınız..." data-en="You will write information about yourself here...">Buraya hakkınızda bilgi yazacaksınız...</p>
</div>
```

#### Projeler Bölümü
```html
<div class="project-card">
    <div class="project-image">
        <i class="fab fa-android"></i>
    </div>
    <div class="project-content">
        <h3 data-tr="Proje Adı" data-en="Project Name">Proje Adı</h3>
        <p data-tr="Proje açıklaması buraya gelecek..." data-en="Project description will be here...">Proje açıklaması buraya gelecek...</p>
        <div class="project-tech">
            <span class="tech-tag">Kotlin</span>
            <span class="tech-tag">Jetpack Compose</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fab fa-github"></i></a>
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
        </div>
    </div>
</div>
```

#### İletişim Bilgileri
```html
<a href="mailto:your.email@example.com" class="contact-link">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</a>
<a href="tel:+905551234567" class="contact-link">
    <i class="fas fa-phone"></i>
    <span>+90 555 123 45 67</span>
</a>
<a href="https://github.com/yourusername" target="_blank" class="contact-link">
    <i class="fab fa-github"></i>
    <span>github.com/yourusername</span>
</a>
<a href="https://linkedin.com/in/yourusername" target="_blank" class="contact-link">
    <i class="fab fa-linkedin"></i>
    <span>linkedin.com/in/yourusername</span>
</a>
<a href="https://instagram.com/yourusername" target="_blank" class="contact-link">
    <i class="fab fa-instagram"></i>
    <span>instagram.com/yourusername</span>
</a>
```

### Yetenekler Ekleme/Çıkarma

`index.html` dosyasında skill-tags bölümünü düzenleyin:

```html
<div class="skill-tags">
    <span class="skill-tag">Kotlin</span>
    <span class="skill-tag">Java</span>
    <span class="skill-tag">Android SDK</span>
    <span class="skill-tag">Jetpack Compose</span>
    <span class="skill-tag">MVVM</span>
    <span class="skill-tag">Room Database</span>
    <span class="skill-tag">Retrofit</span>
    <span class="skill-tag">Firebase</span>
    <span class="skill-tag">Git</span>
    <span class="skill-tag">Material Design</span>
</div>
```

### Renk Teması Değiştirme

`styles.css` dosyasında CSS değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #3ddc84;      /* Ana renk */
    --secondary-color: #4285f4;    /* İkincil renk */
    --background-color: #ffffff;   /* Arka plan rengi */
    /* Diğer renkler... */
}
```

## Özellikler Detayı

### Tema Sistemi
- Kullanıcı tercihi localStorage'da saklanır
- Sayfa yenilendiğinde tema korunur
- Smooth geçiş animasyonları

### Dil Sistemi
- Türkçe ve İngilizce dil desteği
- Tüm metinler dinamik olarak değişir
- HTML lang attribute otomatik güncellenir

### Responsive Tasarım
- Mobile-first yaklaşım
- Tablet ve desktop için optimize edilmiş
- Hamburger menü mobil cihazlarda

### Animasyonlar
- Scroll-triggered animasyonlar
- Hover efektleri
- Smooth scrolling
- Loading animasyonları

## Tarayıcı Desteği

- Chrome (önerilen)
- Firefox
- Safari
- Edge

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## Destek

Herhangi bir sorun yaşarsanız veya özelleştirme konusunda yardıma ihtiyacınız varsa, lütfen iletişime geçin.

---

**Not**: Bu portföy sitesi Android uygulama geliştiricileri için özel olarak tasarlanmıştır. Android temalı renkler ve ikonlar kullanılmıştır. 