import renderer from "react-test-renderer";
import IButton from "..";

it("renders correctly", () => {
  const tree = renderer.create(<IButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
