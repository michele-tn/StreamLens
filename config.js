// Set the HTTPS URL of your deployed extraction backend before publishing.
window.STREAMLENS_PROXY = location.hostname === 'localhost' || location.hostname === '127.0.0.1' ? location.origin + '/proxy' : '';
