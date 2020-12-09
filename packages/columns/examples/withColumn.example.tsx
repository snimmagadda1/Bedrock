import { Column, Columns } from "@bedrock-layout/columns";
import React from "react";
import styled from "styled-components";

const BorderedBox = styled.div`
  border: 1px solid black;
`;
BorderedBox.displayName = "BorderedBox";

const title = "Columns";
const name = "With Column Component";

function Example(args: Record<string, unknown>) {
  return (
    <Columns {...args}>
      <Column span={2}>
        <BorderedBox>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          consequuntur corrupti beatae commodi vitae, perspiciatis totam
          provident architecto doloribus aperiam sapiente, incidunt nihil
          suscipit voluptatibus tempore est dolor! Iusto, vero.
        </BorderedBox>
      </Column>
      <Column span={2}>
        <BorderedBox>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          consequuntur corrupti beatae commodi vitae, perspiciatis totam
          provident architecto doloribus aperiam sapiente, incidunt nihil
          suscipit voluptatibus tempore est dolor! Iusto, vero.
        </BorderedBox>
      </Column>
      <Column>
        <BorderedBox>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          consequuntur corrupti beatae commodi vitae, perspiciatis totam
          provident architecto doloribus aperiam sapiente, incidunt nihil
          suscipit voluptatibus tempore est dolor! Iusto, vero.
        </BorderedBox>
      </Column>
      <Column span={3}>
        <BorderedBox>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          consequuntur corrupti beatae commodi vitae, perspiciatis totam
          provident architecto doloribus aperiam sapiente, incidunt nihil
          suscipit voluptatibus tempore est dolor! Iusto, vero.
        </BorderedBox>
      </Column>
    </Columns>
  );
}

Example.story = { name };
Example.args = {
  columns: 3,
  dense: false,
};
export const Comp = Example;
export default {
  title,
};
