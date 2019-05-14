import Adapter from "enzyme-adapter-react-16"
import Enzyme from "enzyme"
import "./library/extensions/date.extensions"

Enzyme.configure({ adapter: new Adapter() });