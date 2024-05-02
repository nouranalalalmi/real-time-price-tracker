import { render, screen } from '@testing-library/react';

import { OverviewItem } from '../OverviewItem';

describe('OverviewItem', () => {
  it('should render the label and children', () => {
    const { container } = render(
      <OverviewItem label="Test Label">
        <div>Test Child</div>
      </OverviewItem>
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
