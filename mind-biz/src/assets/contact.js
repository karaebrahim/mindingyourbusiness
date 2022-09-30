import React from 'react';
import styled from 'styled-components';
import { images } from '../images';
import PageHeader from './pageheader';
import Form from './form';
import { breakpointBelow } from '../config/breakpoints';

const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  padding-top: 10px;

  ${breakpointBelow.tablet} {
    width: auto;
    padding: 20px;
  }
`;

const Directions = styled.div`
  width: 500px;
  margin: 0 auto 20px;
  padding-top: 10px;

  ${breakpointBelow.tablet} {
    width: auto;
    padding: 20px;
  }

  iframe {
    ${breakpointBelow.tabletPortrait} {
      width: auto;
    }
  }
`;

const Contact = () => {
  return (
    <>
      <PageHeader image={images.flowers} />
      <div>
        <FormContainer>
          <Form h1 />
        </FormContainer>
        <Directions>
          <h1>directions</h1>
          <h2>7 Tee Drive, Portland, ME 04103</h2>
          <h3>From I-95, North or South</h3>
          <p>Enter the Maine Turnpike and exit the highway at Exit 48, Portland/ Westbrook. Turn right at Riverside Street, travel approximately 1 mile, and turn right at 1039 Riverside Street. Turn left onto Tee Drive.</p>
          <h3>From downtown Portland</h3>
          <p>Head southwest on Congress Street aproximately 0.4 miles, and then turn right at Forest Avenue. After 4.6 miles, turn right at Riverside Street, and after 0.7 miles, turn right at 1039 Riverside Street. Turn left onto Tee Drive.</p>
          <small>To find via GPS, enter 1039 Riverside Street, Portland, ME 04103</small>
          <iframe title="map" width="500" height="350" frameBorder="2" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=7+tee+drive+portland+me&amp;ie=UTF8&amp;hq=&amp;hnear=Tee+Dr,+Portland,+Cumberland,+Maine+04103&amp;gl=us&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=43.710084,-70.312432&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?q=7+tee+drive+portland+me&amp;ie=UTF8&amp;hq=&amp;hnear=Tee+Dr,+Portland,+Cumberland,+Maine+04103&amp;gl=us&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=43.710084,-70.312432&amp;source=embed" style={{ color: "#f0542e", textAlign: "left"}}>View Larger Map</a></small>
        </Directions>
      </div>
    </>
  );
}

export default Contact;
