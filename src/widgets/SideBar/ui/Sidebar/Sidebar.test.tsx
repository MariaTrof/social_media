import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
// eslint-disable-next-line max-len
import { RenderwithTranslation } from '../../../../shared/lib/test/RenderwithTranslation/REnderwithTranslation';

describe('Sidebar', () => {
    test('with only first param', () => {
        RenderwithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        RenderwithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
