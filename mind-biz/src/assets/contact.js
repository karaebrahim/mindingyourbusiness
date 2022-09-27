import React from 'react';
import styled from 'styled-components';
import { images } from '../images';
import PageHeader from './pageheader';

const Form = styled.div`
  width: 500px;
  margin: 0 auto;
  padding-top: 10px;

  input[type="text"], input[type="email"] {
    width: 500px;
    margin-bottom: 20px;
  }
   
  textarea{
    width: 500px;
    height: 200px;
    margin-bottom: 10px;
  }
  
  input[type="submit"] {
    font-size: 80%;
    margin-bottom: 10px;
  }
`;

const Directions = styled.div`
  width: 500px;
  margin: 0 auto 20px;
  padding-top: 10px;
`;

const Contact = () => {
  return (
    <>
      <PageHeader image={images.flowers} />
      <div>
        <Form>
          <h1>contact</h1>
          <form action="mailto:maria@mindingyourbusinessinc.com" method="post" enctype="text/plain">
            <fieldset class="personal-info">
              <label for="name">name </label><input type="text" name="name" id="name" />
              <label for="email">email </label><input type="email" name="email" id="email" />
            </fieldset>
            <fieldset class="comment-info">
              <label class="column">questions/comments </label>
              <textarea class="comments"></textarea>
              <input type="submit" value="Submit" />
            </fieldset>
          </form>
        </Form>

        <Directions>
          <h1>directions</h1>
          <h3>7 Tee Drive, Portland, ME 04103</h3>
          <h3>From I-95, North or South</h3>
          <p>Enter the Maine Turnpike and exit the highway at Exit 48, Portland/ Westbrook. Turn right at Riverside Street, travel approximately 1 mile, and turn right at 1039 Riverside Street. Turn left onto Tee Drive.</p>
          <h3>From downtown Portland</h3>
          <p>Head southwest on Congress Street aproximately 0.4 miles, and then turn right at Forest Avenue. After 4.6 miles, turn right at Riverside Street, and after 0.7 miles, turn right at 1039 Riverside Street. Turn left onto Tee Drive.</p>
          <small>To find via GPS, enter 1039 Riverside Street, Portland, ME 04103</small>
          <iframe title="map" width="500" height="350" frameborder="2" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=7+tee+drive+portland+me&amp;ie=UTF8&amp;hq=&amp;hnear=Tee+Dr,+Portland,+Cumberland,+Maine+04103&amp;gl=us&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=43.710084,-70.312432&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?q=7+tee+drive+portland+me&amp;ie=UTF8&amp;hq=&amp;hnear=Tee+Dr,+Portland,+Cumberland,+Maine+04103&amp;gl=us&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=43.710084,-70.312432&amp;source=embed" style={{ color: "#f0542e", textAlign: "left"}}>View Larger Map</a></small>
        </Directions>
      </div>
    </>
  );
}

export default Contact;
