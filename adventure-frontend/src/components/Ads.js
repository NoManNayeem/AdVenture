import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import api from '../api';

function Ads() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    api.get('/ssp/adslots/')
      .then(response => {
        console.log('API response:', response.data);
        if (response && response.data && Array.isArray(response.data.results)) {
          setAds(response.data.results);
        } else {
          setAds([]);
        }
      })
      .catch(error => {
        console.error('Error fetching ads:', error);
        setAds([]);
      });
  }, []);

  const renderAdContent = (ad) => {
    if (ad.ad_image) {
      // Display the ad as an image if the ad_image field is present
      return (
        <CardMedia
          component="img"
          image={ad.ad_image}
          alt={ad.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      );
    } else if (ad.ad_html_content) {
      // Display the ad as HTML if the ad_html_content field is present
      return (
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: ad.ad_html_content }} />
        </CardContent>
      );
    } else if (ad.ad_content) {
      // Display the ad as text content if the ad_content field is present
      return (
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {ad.ad_content}
          </Typography>
        </CardContent>
      );
    } else {
      // Fallback if no ad content is available
      return (
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            No ad content available.
          </Typography>
        </CardContent>
      );
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '30px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Ads
      </Typography>
      <Grid container spacing={3}>
        {ads.length > 0 ? (
          ads.map(ad => (
            <Grid item xs={12} sm={6} key={ad.id}>
              <Card>
                {renderAdContent(ad)}
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {ad.name}
                  </Typography>
                  <Typography variant="body1">
                    Size: {ad.width}x{ad.height}
                  </Typography>
                  <Typography variant="body1">
                    Format: {ad.format}
                  </Typography>
                  <Typography variant="body1">
                    Publisher: {ad.publisher}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary" style={{ marginTop: '20px' }}>
            No ads found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default Ads;
