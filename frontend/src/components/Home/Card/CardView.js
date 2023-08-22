import React, { useState } from 'react';
import {Card, CardBody, CardHeader, CardTitle} from '@patternfly/react-core';
import './CardView.css'; // Import your custom CSS file for styling

export const CardView = ({name, body}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
      <Card isRounded={true} isClickable={true} onClick={()=>setIsFlipped(!isFlipped)}>
          <CardHeader><CardTitle>{name}</CardTitle></CardHeader>
          <CardBody>
            <h2>{isFlipped ? 'Back Side' : body}</h2>
          </CardBody>
      </Card>

  );
};
