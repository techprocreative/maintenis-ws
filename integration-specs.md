# Spesifikasi Integrasi WhatsApp dan Instagram
## Landing Page Maintenance TOSERBA WS PEDAK

## WhatsApp Integration

### 1. WhatsApp Click-to-Chat Implementation

#### Direct Link Format
```
https://wa.me/6281239602221?text=Halo%20Toserba%20WS%20Pedak,%20saya%20ingin%20melakukan%20pemesanan%20produk.%20Mohon%20informasikan%20cara%20pemesanan%20selama%20website%20maintenance.
```

#### Breakdown:
- **Base URL**: `https://wa.me/`
- **Phone Number**: `6281239602221` (format internasional tanpa + dan 00)
- **Pre-filled Message**: URL-encoded text dengan template pesan

#### HTML Implementation
```html
<a href="https://wa.me/6281239602221?text=Halo%20Toserba%20WS%20Pedak,%20saya%20ingin%20melakukan%20pemesanan%20produk.%20Mohon%20informasikan%20cara%20pemesanan%20selama%20website%20maintenance." 
   target="_blank" 
   rel="noopener noreferrer" 
   class="whatsapp-button">
   <i class="whatsapp-icon"></i>
   Pesan via WhatsApp
</a>
```

#### JavaScript Implementation (Alternative)
```javascript
function openWhatsApp() {
  const phoneNumber = '6281239602221';
  const message = encodeURIComponent('Halo Toserba WS Pedak, saya ingin melakukan pemesanan produk. Mohon informasikan cara pemesanan selama website maintenance.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}
```

### 2. WhatsApp QR Code Generation

#### QR Code Content
```
https://wa.me/6281239602221?text=Halo%20Toserba%20WS%20Pedak,%20saya%20ingin%20melakukan%20pemesanan%20produk.%20Mohon%20informasikan%20cara%20pemesanan%20selama%20website%20maintenance.
```

#### Implementation Options
1. **Online QR Generator**: Gunakan layanan seperti qr-code-generator.com
2. **Library Implementation**: 
   ```javascript
   // Menggunakan qrcode.js library
   new QRCode(document.getElementById("qrcode"), {
     text: "https://wa.me/6281239602221?text=Halo%20Toserba%20WS%20Pedak,%20saya%20ingin%20melakukan%20pemesanan%20produk.%20Mohon%20informasikan%20cara%20pemesanan%20selama%20website%20maintenance.",
     width: 200,
     height: 200,
     colorDark: "#1E4DB7",
     colorLight: "#ffffff",
     correctLevel: QRCode.CorrectLevel.H
   });
   ```

### 3. WhatsApp Business API (Future Enhancement)

#### Requirements for Business API
- Verified WhatsApp Business Account
- Facebook Business Verification
- Phone number dedicated for WhatsApp Business

#### Benefits
- Automated responses
- Chat analytics
- Multi-agent support
- API integration with inventory system

## Instagram Integration

### 1. Instagram Profile Link

#### Direct Profile URL
```
https://www.instagram.com/toserbawspedak/
```

#### HTML Implementation
```html
<a href="https://www.instagram.com/toserbawspedak/" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="instagram-button">
   <i class="instagram-icon"></i>
   Follow @toserbawspedak
</a>
```

### 2. Instagram Embed Options

#### Option A: Profile Embed (Limited)
```html
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/toserbawspedak/" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
  <div style="padding:16px;"> 
    <a href="https://www.instagram.com/toserbawspedak/" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank" rel="noopener noreferrer">
      <div style=" display: flex; flex-direction: row; align-items: center;">
        <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
        <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
          <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
          <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
        </div>
      </div>
      <div style="padding: 19% 0;"></div>
      <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.04179 C555.979,28.7954 553.162,26.97979 546.239,26.97979 C539.322,26.97979 536.508,28.7954 535.617,30.04179 C534.727,31.28819 534.727,32.97279 534.727,32.97279 L534.727,37.04179 C534.727,37.04179 534.727,38.72639 535.617,39.97279 C536.508,41.21919 539.322,43.03479 546.239,43.03479 C553.162,43.03479 555.979,41.21919 556.869,39.97279 C557.759,38.72639 557.759,37.04179 557.759,37.04179 L557.759,32.97279 C557.759,32.97279 557.759,31.28819 556.869,30.04179"></path></g></g></svg>
      </div>
      <div style="padding-top: 8px;">
        <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div>
      </div>
      <div style="padding: 12.5% 0;"></div>
      <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
        <div>
          <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
        </div>
        <div style="padding-right: 8px;">
          <div style=" background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
        </div>
        <div>
          <div style=" background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
        </div>
      </div>
    </a>
  </div>
</blockquote>
<script async src="//www.instagram.com/embed.js"></script>
```

#### Option B: Recent Posts Embed
```html
<!-- Menggunakan LightWidget atau SnapWidget -->
<iframe src="https://cdn.lightwidget.com/widgets/xxxxxxxxxxxxx.html" 
        scrolling="no" 
        allowtransparency="true" 
        class="lightwidget-widget" 
        style="width:100%;border:0;overflow:hidden;">
</iframe>
```

### 3. Instagram Stories Highlights

#### Manual Implementation
```html
<div class="instagram-highlights">
  <div class="highlight-item">
    <div class="highlight-circle">
      <img src="path-to-highlight-cover.jpg" alt="Produk Unggulan">
    </div>
    <span>Produk Unggulan</span>
  </div>
  <div class="highlight-item">
    <div class="highlight-circle">
      <img src="path-to-highlight-cover.jpg" alt="Promo">
    </div>
    <span>Promo</span>
  </div>
</div>
```

#### Instagram Basic Display API (Advanced)
```javascript
// Endpoint untuk mendapatkan media
GET https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url,caption&access_token={access-token}

// Contoh response
{
  "data": [
    {
      "id": "17895695668004550",
      "media_type": "IMAGE",
      "media_url": "https://...",
      "permalink": "https://www.instagram.com/p/CBX...",
      "caption": "Produk terbaru dari Toserba WS Pedak!",
      "thumbnail_url": "https://..."
    }
  ]
}
```

## Tracking & Analytics

### 1. Event Tracking Implementation

#### Google Analytics 4
```javascript
// WhatsApp button click
gtag('event', 'whatsapp_click', {
  'event_category': 'contact',
  'event_label': 'whatsapp_maintenance_page',
  'value': 1
});

// Instagram button click
gtag('event', 'instagram_click', {
  'event_category': 'contact',
  'event_label': 'instagram_maintenance_page',
  'value': 1
});
```

#### Facebook Pixel
```javascript
// WhatsApp button click
fbq('track', 'Contact', {
  'channel': 'WhatsApp',
  'page': 'maintenance'
});

// Instagram button click
fbq('track', 'Lead', {
  'channel': 'Instagram',
  'page': 'maintenance'
});
```

### 2. UTM Parameters for Campaign Tracking

#### WhatsApp Link with UTM
```
https://wa.me/6281239602221?text=Halo%20Toserba%20WS%20Pedak,%20saya%20ingin%20melakukan%20pemesanan%20produk.%20Mohon%20informasikan%20cara%20pemesanan%20selama%20website%20maintenance.&utm_source=maintenance_page&utm_medium=whatsapp&utm_campaign=website_maintenance
```

#### Instagram Link with UTM
```
https://www.instagram.com/toserbawspedak/?utm_source=maintenance_page&utm_medium=instagram&utm_campaign=website_maintenance
```

## Fallback Options

### 1. Click-to-Call Fallback
```html
<a href="tel:+6281239602221" class="phone-button">
   <i class="phone-icon"></i>
   Hubungi Langsung
</a>
```

### 2. Email Fallback
```html
<a href="mailto:info@toserbawspedak.com?subject=Pemesanan%20Produk&body=Halo%20Toserba%20WS%20Pedak,%20saya%20ingin%20melakukan%20pemesanan%20produk." 
   class="email-button">
   <i class="email-icon"></i>
   Kirim Email
</a>
```

## Security Considerations

### 1. Link Security
- Gunakan `rel="noopener noreferrer"` untuk semua external links
- Validasi semua user inputs jika ada form
- Implementasi CSP (Content Security Policy)

### 2. Privacy Compliance
- Jangan track personal information tanpa consent
- Berikan opsi untuk tidak tracking
- Comply dengan GDPR jika applicable

## Performance Optimization

### 1. Lazy Loading
```html
<!-- Lazy load Instagram embed -->
<iframe src="" 
        data-src="https://cdn.lightwidget.com/widgets/xxxxxxxxxxxxx.html" 
        loading="lazy"
        class="lazy-instagram-widget">
</iframe>
```

### 2. Resource Optimization
- Minimize external scripts
- Use async loading for non-critical scripts
- Optimize images and icons

## Testing Checklist

### 1. Functionality Testing
- [ ] WhatsApp link opens correctly on mobile
- [ ] WhatsApp link opens correctly on desktop
- [ ] Instagram link opens correctly on mobile
- [ ] Instagram link opens correctly on desktop
- [ ] QR code scans correctly
- [ ] Fallback options work

### 2. Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 3. Analytics Testing
- [ ] Events fire correctly
- [ ] UTM parameters are captured
- [ ] Conversion tracking works

## Maintenance & Updates

### 1. Regular Checks
- Verify links are working monthly
- Update phone number if changed
- Update Instagram handle if changed
- Check analytics for unusual patterns

### 2. Content Updates
- Update template messages as needed
- Refresh Instagram embed periodically
- Update promotional content

## Future Enhancements

### 1. Advanced Features
- WhatsApp Business API integration
- Instagram Shopping integration
- Live chat support
- Product catalog integration

### 2. Automation
- Auto-responder for WhatsApp
- Scheduled Instagram posts
- Automated follow-up messages
- Inventory sync with social media