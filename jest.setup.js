import Adapter from "enzyme-adapter-react-16"
import Enzyme from "enzyme"
import "./library/extensions/date.extensions"
import mockdate from "mockdate"
Enzyme.configure({ adapter: new Adapter() });
const today = new Date(2019, 5, 15, 10, 0, 0, 0)
mockdate.set(today)

jest.mock('ScrollView', () => {
  const MockScrollView = require.requireMock('ScrollViewMock');
  const React = require('React');  
  const RealScrollView = require.requireActual('ScrollView');
  class ScrollView extends React.Component {
    scrollTo() {
    }

    render() {
      return (
        <MockScrollView {...this.props} />
      );
    }
  }
  ScrollView.propTypes = RealScrollView.propTypes;
  return ScrollView;
});