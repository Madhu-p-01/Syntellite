# GA4 Troubleshooting Guide

## Issue: Events showing in console but not in GA4 dashboard

### ✅ Fixed Issues
1. **Test Mode**: Changed `testMode: false` to send real data to GA4
2. **TypeScript Errors**: Fixed all `process.env` references to use Vite's `import.meta.env`
3. **Dual Tracking**: Added native `gtag` calls as fallback alongside ReactGA

## Steps to Verify GA4 Integration

### 1. Clear Browser Data (Important!)
```javascript
// In browser console, run:
localStorage.removeItem('analytics_consent')
location.reload()
```

### 2. Test the Flow
1. **Refresh the page** - Cookie consent banner should appear after 2 seconds
2. **Click "Accept Analytics"** - Check console for initialization logs
3. **Navigate between pages** - Should see page view logs
4. **Visit a service page** (e.g., `/services/web-development`) - Should see service tracking
5. **Submit contact form** - Should see form submission tracking
6. **Click "Book a Meeting"** - Should see CTA tracking

### 3. Check Console Logs
You should see logs like:
```
Google Analytics initialized with ID: G-EYPE2WBGNL
Test mode: false
Debug mode: true
Page view tracked: / Home
Event tracked: {action: "page_view", category: "Services", label: "Service Page - Web Development", value: 1}
```

### 4. Verify in GA4 Dashboard

#### Real-time Reports (Shows immediately)
1. Go to **Google Analytics** → **Reports** → **Realtime**
2. You should see:
   - Active users on your site
   - Page views in real-time
   - Events as they happen

#### Standard Reports (Takes 24-48 hours)
1. **Acquisition** → **Traffic acquisition**
2. **Engagement** → **Events**
3. **Engagement** → **Pages and screens**

### 5. Debug Mode Verification
With debug mode enabled, you can also:
1. Install **Google Analytics Debugger** Chrome extension
2. Open **Chrome DevTools** → **Console**
3. Look for GA4 debug messages

### 6. Network Tab Verification
1. Open **Chrome DevTools** → **Network** tab
2. Filter by "analytics" or "google"
3. You should see requests to:
   - `https://www.google-analytics.com/g/collect`
   - `https://www.googletagmanager.com/gtag/js`

## Expected Timeline for Data

| Type | Appears In |
|------|------------|
| Real-time data | Immediately (within seconds) |
| Standard reports | 24-48 hours |
| Custom events | 24-48 hours |
| Audience data | 24-48 hours |

## Common Issues & Solutions

### Issue 1: No data in Real-time
**Solution**: 
- Clear localStorage and re-accept consent
- Check if ad blockers are blocking GA4
- Verify measurement ID is correct

### Issue 2: Events not showing
**Solution**:
- Check console for error messages
- Verify consent was given
- Test with different browser/incognito mode

### Issue 3: Page views missing
**Solution**:
- Check if SPA routing is working
- Verify App.tsx integration
- Test manual page navigation

## Testing Commands

### Check Consent Status
```javascript
localStorage.getItem('analytics_consent')
// Should return: "true"
```

### Force Re-consent
```javascript
localStorage.removeItem('analytics_consent')
location.reload()
```

### Manual Event Test
```javascript
// In browser console (after consent):
gtag('event', 'test_event', {
  event_category: 'Test',
  event_label: 'Manual Test',
  value: 1
});
```

## GA4 Property Settings to Check

### 1. Data Retention
- Go to **Admin** → **Data Settings** → **Data Retention**
- Ensure it's set to appropriate duration

### 2. Enhanced Measurement
- Go to **Admin** → **Data Streams** → **Web**
- Check if enhanced measurement is enabled

### 3. Debug View
- Go to **Admin** → **DebugView**
- Should show real-time debug events when debug_mode is true

## Next Steps

1. **Clear browser data and test the full flow**
2. **Check GA4 Real-time reports within 5 minutes**
3. **If still no data, check browser network tab for GA requests**
4. **Wait 24-48 hours for standard reports to populate**

## Contact Form Testing

To test contact form tracking:
1. Go to `/contact`
2. Fill out the form completely
3. Submit the form
4. Check console for: `Event tracked: {action: "form_submit", category: "Contact", ...}`
5. Check GA4 Real-time → Events for "form_submit" event

## Service Page Testing

To test service page tracking:
1. Go to `/services/web-development`
2. Check console for: `Event tracked: {action: "page_view", category: "Services", ...}`
3. Check GA4 Real-time → Events for custom "page_view" event

The integration is now properly configured to send real data to GA4. The key fix was disabling test mode and adding dual tracking methods for maximum reliability.
