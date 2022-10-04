import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: ${p => p.theme.mp(2, 4)};
  padding: ${p => p.theme.mp(2, 4)};
  width: 450px;

  border: none;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 3px 2px 7px rgba(0, 0, 0, 0.2);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${p => p.theme.mp(2, 0, 1)};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StyledInput = styled.input`
  margin: ${p => p.theme.mp(0, 0, 0, 3)};
  padding: ${p => p.theme.mp(1, 2)};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};

  outline: 1px solid black;
  border: none;
  border-radius: ${p => p.theme.radii.normal};
`;

export const StyledButton = styled.button`
  margin: ${p => p.theme.mp(3, 'auto', 2)};
  padding: ${p => p.theme.mp(1, 3)};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  outline: none;
  border: none;
  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.colors.buttonColor};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonColorAccent};
    box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: ${p => p.theme.colors.buttonColorActive};
    box-shadow: inset 2px 1px 3px rgba(0, 0, 0, 0.4);
  }
`;
