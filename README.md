# VISACOUNTER - F4 Visa Statistics Dashboard

A comprehensive web application for tracking and visualizing F4 (Family-sponsored) visa issuance statistics with a powerful admin panel for data management.

## 🚀 Features

### **Public Dashboard**
- **Monthly Visa Statistics**: View total visas issued per month
- **Country-wise Data**: Detailed breakdown by country with search functionality
- **Month Selector**: Switch between different months (October 2024 - May 2025)
- **Real-time Calculations**: Automatic totals, percentages, and remaining visa calculations
- **Annual Limit Tracking**: Shows progress against the 65,000 annual visa limit
- **Social Media Integration**: Links to Facebook group, page, and YouTube channel

### **Admin Panel** 🔒
- **Secure Authentication**: ID and password protection
- **Two Management Options**:
  1. **Add New Table**: Create country-wise data for new months with unlimited rows
  2. **Update Existing Table**: Modify monthly totals and existing country data
- **Dynamic Table Builder**: Add/remove countries with real-time validation
- **Data Persistence**: All changes automatically saved locally

### **Responsive Design**
- **Mobile-first approach**: Optimized for all screen sizes
- **Touch-friendly interface**: Easy navigation on tablets and phones
- **Progressive enhancement**: Works on older browsers

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Storage**: localStorage for data persistence

## 📱 Getting Started

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required

### **Installation**
1. Clone or download the repository
2. Open `index.html` in your web browser
3. That's it! No installation required.

### **Admin Access**
- **ID**: `admin`
- **Password**: `visa2025`

## 📁 Project Structure

```
visacounter/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── .gitignore          # Git ignore file
│
└── data/               # Data files (optional)
    ├── country_wise_visa_issuance_f4.txt
    └── total_visa_count_f4.txt
```

## 🎯 Usage Guide

### **For Visitors**
1. **View Statistics**: Browse monthly and country-wise visa data
2. **Search Countries**: Use the search box to find specific countries
3. **Switch Months**: Use the dropdown to view different time periods
4. **Social Links**: Connect via Facebook and YouTube

### **For Administrators**
1. **Login**: Click "Admin Panel" and enter credentials
2. **Add New Data**: 
   - Choose "Add New Table" for new months
   - Add unlimited country rows
   - Save to create new monthly dataset
3. **Update Existing**:
   - Choose "Update Existing Table"
   - Modify monthly totals or country data
   - Changes reflect immediately on dashboard

## 🔧 Features Deep Dive

### **Month Selector**
- Dynamic dropdown with all available months
- Instant data switching with smooth animations
- Search functionality works within selected month

### **Admin Panel Authentication**
- Secure login system with demo credentials
- Session-based access (no cookies)
- Logout functionality

### **Table Builder**
- Add unlimited rows for country data
- Real-time validation and error highlighting
- Delete individual rows (minimum 1 required)
- Automatic data formatting and sorting

### **Data Management**
- Auto-save functionality
- localStorage persistence
- Data validation and error handling
- Export capabilities (future feature)

## 📊 Data Sources

Based on official U.S. Department of State visa statistics:
- **Source**: https://travel.state.gov/content/travel/en/legal/visa-law0/visa-statistics/immigrant-visa-statistics/monthly-immigrant-visa-issuances.html
- **Period**: October 2024 - September 2025 (Fiscal Year)
- **Visa Type**: F4 (Brothers and Sisters of U.S. Citizens)

## 🌐 Deployment

### **GitHub Pages**
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main/master)
4. Your site will be available at `https://yourusername.github.io/visacounter`

### **Netlify**
1. Drag and drop the project folder to netlify.com/drop
2. Or connect your GitHub repository
3. Automatic deployment on every commit

### **Vercel**
1. Import repository on vercel.com
2. No configuration needed
3. Automatic deployment with custom domain support

### **Traditional Hosting**
- Upload all files to your web hosting provider
- No server-side requirements
- Works with any static hosting service

## 🔒 Security Features

- Client-side authentication (suitable for demo/internal use)
- Input validation and sanitization
- XSS protection through proper DOM manipulation
- No sensitive data exposure

## 🚀 Performance Optimizations

- **Lazy loading**: Images and heavy content loaded on demand
- **Efficient DOM updates**: Minimal redraws and reflows
- **Local storage**: Fast data access without server requests
- **CSS animations**: Hardware-accelerated transitions
- **Optimized images**: Compressed and properly sized assets

## 📈 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ⚠️ Internet Explorer 11 (limited support)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Facebook Group**: https://www.facebook.com/share/g/175MdiQUQB/
- **Facebook Page**: https://www.facebook.com/share/p/1GFuuoS14C/
- **YouTube**: https://www.youtube.com/@Scifinovation-566

## 🔄 Version History

### v1.0.0 (Current)
- Initial release with full dashboard functionality
- Admin panel with authentication
- Responsive design
- Data management capabilities
- Month selector and search features

## 🎯 Future Enhancements

- [ ] Data export to CSV/Excel
- [ ] Real-time API integration
- [ ] User management system
- [ ] Advanced analytics and charts
- [ ] Email notifications for updates
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Data visualization improvements

---

**Made with ❤️ for the visa community**

*Last updated: July 2025*
