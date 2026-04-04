# DATCOM Demo Analytics

## Tracking Events

The DATCOM demo tracks the following events:

### Page Events
- `page_view` - When demo loads
- `page_exit` - When user leaves
- `time_on_page` - Every 30 seconds
- `demo_loaded` - When demo finishes loading

### Interaction Events  
- `badge_click` - Badge clicks (webassembly, rust, github)
- `slider_change` - Slider value changes
- `result_click` - Result card clicks
- `analysis_milestone` - Every 10 analyses

### Data Collected
- Session ID (unique per visit)
- Timestamp
- User agent
- Viewport size
- Referrer
- Language
- Time on page
- Interaction counts

### Privacy
- No personal information collected
- No cookies used
- Data sent to echo.ai.hammant.io/api/analytics
- Fallback to localStorage if endpoint unavailable

### Usage Statistics
Track:
- Total page views
- Time spent interacting
- Most used sliders
- Popular configurations
- Geographic distribution (via IP)
