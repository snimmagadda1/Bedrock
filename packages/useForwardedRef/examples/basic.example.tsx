import React from 'react';
import useForwardedRef from '@bedrock-layout/useForwardedRef';
import styled from 'styled-components';

const BorderedBox = styled.div`
  border: 1px solid black;
`;

BorderedBox.displayName = 'BorderedBox';

const RefBox = React.forwardRef<HTMLElement, { children?: React.ReactNode }>(
  ({ children }, ref) => {
    const innerRef = useForwardedRef(ref);
    const [rect, setRect] = React.useState({});
    React.useEffect(() => {
      if (innerRef.current) {
        setRect(innerRef.current.getBoundingClientRect());
      }
    }, [innerRef]);
    return (
      <BorderedBox ref={innerRef}>
        {innerRef && (
          <p>innerRef clientBoundingRect:{JSON.stringify(rect, null, 3)}</p>
        )}
        {children}
      </BorderedBox>
    );
  }
);

let title = 'useForwardedRef';
let name = 'Basic';

function Example() {
  const outerRef = React.useRef<HTMLElement>(null);
  const [type, setType] = React.useState(null);
  React.useEffect(() => {
    if (outerRef.current) {
      setType(outerRef.current.clientHeight);
    }
  }, [outerRef]);
  return (
    <div>
      This is still experimental
      <RefBox ref={outerRef}>OuterRef clientHeight: {type}</RefBox>
    </div>
  );
}

Example.story = { name };
export const Comp = Example;
export default {
  title,
};