// eslint-disable-next-line import/no-extraneous-dependencies
import matchers, {
  TestingLibraryMatchers,
} from '@testing-library/jest-dom/matchers';

declare global {
  namespace Vi {
    interface JestAssertion<T>
      extends jest.Matchers<void, T>,
      TestingLibraryMatchers<T, void> {}
  }
}

expect.extend(matchers);