import { ICourses } from "@/interfaces/components.interface";
import { CardComponent } from "@/components/cards/Card";
import { useUniqueKeyGenerator } from "@/hooks/useUniqueKeyGenerator";
import { Tag } from "antd";
import { ICourse } from "@/interfaces/models/course.interface";

export const CoursesLayout = ({ title, courses, status }: ICourses<ICourse>) => {
    const generatorKey = useUniqueKeyGenerator();

    return (
        <div className="mt-20">
            <h3 className="text-3xl mb-4 font-[900]">
                {title}
                {status && (
                    <sup>
                        <Tag color={status?.color} className="ms-2">
                            {status?.text}
                        </Tag>
                    </sup>
                )}
            </h3>
            <div className="flex gap-6 flex-wrap items-center">
                {courses?.map((course, index) => {
                    return (
                        <CardComponent
                            title={course.title}
                            slug={course.slug}
                            img={course.img}
                            price={course.price}
                            status={course.status}
                            key={generatorKey(course, index)}
                            discount={course.discount}
                        />
                    );
                })}
            </div>
        </div>
    );
};
