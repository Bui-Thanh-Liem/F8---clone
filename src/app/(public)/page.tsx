import { ICourse } from "@/interfaces/models/course.interface";
import { SliderLayout } from "@/layouts/public/sliders/SliderWide";
import { CoursesLayout } from "@/layouts/public/courses/Courses";
import htmlPro from "../../../public/images/html-css-hero.png";
import sass from "../../../public/images/sass.png";
import comming from "../../../public/images/coming-soon.png";
import responsive from "../../../public/images/responsive.png";
import js from "../../../public/images/js.png";
import reactImg from "../../../public/images/react.png";
import ktnt from "../../../public/images/kien.png";
import htmlHero from "../../../public/images/html-css-hero.png";
import { convertStringToSlug } from "@/utils/convert.util";

const courses: ICourse[] = [
    {
        title: "Learn programming at .BTL 1",
        slug: convertStringToSlug("learn programming at 1"),
        discount: 20000,
        price: 1000000,
        img: htmlPro as unknown as string,
        status: "New",
    },
    {
        title: "Learn programming at .BTL 2",
        slug: convertStringToSlug("learn programming at 2"),
        discount: 0,
        price: 1000000,
        img: sass as unknown as string,
        status: "Update",
    },
    {
        title: "Learn programming at .BTL 3",
        slug: convertStringToSlug("learn programming at 3"),
        discount: 0,
        price: 1000000,
        img: responsive as unknown as string,
    },
    {
        title: "Learn programming at .BTL 4",
        slug: convertStringToSlug("learn programming at 4"),
        discount: 0,
        price: 0,
        img: js as unknown as string,
    },
    {
        title: "Learn programming at .BTL 5",
        slug: convertStringToSlug("learn programming at 5"),
        discount: 0,
        price: 0,
        img: reactImg as unknown as string,
    },
    {
        title: "Learn programming at .BTL 6",
        slug: convertStringToSlug("learn programming at 6"),
        discount: 0,
        price: 0,
        img: comming as unknown as string,
    },
];

export default function HomePage() {
    return (
        <main>
            <SliderLayout />
            <CoursesLayout
                title="Courses Pro"
                status={{ color: "blue", text: "New" }}
                courses={courses}
            />
            <CoursesLayout
                title="Courses Base"
                status={{ color: "green", text: "Base" }}
                courses={courses}
            />
        </main>
    );
}
