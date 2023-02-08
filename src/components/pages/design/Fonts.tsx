import type { Component } from "solid-js";

const Fonts: Component = () => {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra, massa non efficitur porta, erat ipsum facilisis sem, at dapibus eros nulla eget tortor. Sed vitae sapien eget nisl mattis pulvinar vitae vel turpis. Ut nec convallis nulla, eu rutrum magna. Nam sollicitudin, nisi quis facilisis aliquet, ligula ante dictum nibh, eget rutrum nunc tortor sed sapien. Vestibulum in tortor vel magna congue ultrices. Maecenas consequat facilisis velit, id venenatis sem fringilla nec. Integer lacus velit, lobortis vel ex eget, vestibulum efficitur felis. Integer malesuada luctus luctus. Suspendisse dignissim molestie suscipit. Nulla ac aliquam urna, ut eleifend augue. Duis sit amet sagittis lectus, vitae sodales risus. In dignissim odio a mauris condimentum, vitae congue mi molestie. Sed facilisis arcu turpis, eget consequat est eleifend et. Sed laoreet vehicula sapien a laoreet. Donec at dui enim.";
    return (
        <>
            <h1>Fonts</h1>
            <p>We use <b>Space Grotesk</b> for our titles, buttons and links and <b>Space Mono</b> for all other texts.</p>
            <h2>Title</h2>
            <p>{lorem}</p>
            <h3>Subtitle</h3>
            <p>{lorem}</p>
            <h4>Section</h4>
            <p>{lorem}</p>
        </>
    );
};

export default Fonts;
