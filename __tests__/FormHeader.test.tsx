import { render } from '@testing-library/react-native';
import { it } from '@jest/globals';
import FormHeader from '../components/FormHeader';
import c from './common/PreparesEvaContextForTesting';

it('renders correctly', () => {
  render(c(<FormHeader />));
});