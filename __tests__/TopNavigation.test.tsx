import { render } from '@testing-library/react-native';
import { it } from '@jest/globals';
import TopNavigation from '../components/TopNavigation';
import c from './common/PreparesEvaContextForTesting';

it('renders correctly', () => {
  render(c(<TopNavigation />));
});