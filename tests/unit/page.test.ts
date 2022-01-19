// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import { render } from "@testing-library/svelte";
import Home from "../../src/pages/Home.svelte";

test("should render", () => {
    const results = render(Home, { props: { hello: "world" } });

    expect(() => results.getByText("Hello world!")).not.toThrow();
});
