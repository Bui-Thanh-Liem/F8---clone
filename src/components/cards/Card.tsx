"use client";
import "./style.scss";
import { Card, Badge } from "antd";
import Image from "next/image";
import { ICourse } from "@/interfaces/models/course.interface";
import Meta from "antd/es/card/Meta";
import Link from "next/link";

export const CardComponent = (props: ICourse) => {
    const { img, title, price, discount, status, slug } = props;
    return (
        <Link
            href={`/courses/${slug}`}
            className="hover:-translate-y-2 hover:scale-105 transition-all duration-300"
        >
            <Badge.Ribbon
                text={status}
                color="red"
                className={`${!status && "none"}`}
            >
                <Card
                    hoverable
                    cover={
                        <Image
                            alt="example"
                            src={img as string}
                            width={1920}
                            height={400}
                        />
                    }
                    className="w-80 rounded-[8px] min-h-[284px]"
                >
                    <Meta
                        title={<h3 className="text-lg font-bold">{title}</h3>}
                        description={
                            <div className="flex gap-3">
                                {!!price && (
                                    <p
                                        className={`text-lg ${
                                            !discount
                                                ? "text-[--color-primary] font-bold"
                                                : "line-through"
                                        }`}
                                    >
                                        {price?.toLocaleString()}{" "}
                                        <sup>
                                            <strong>đ</strong>
                                        </sup>
                                    </p>
                                )}
                                {!!discount && (
                                    <p className="text-lg font-bold text-[--color-primary]">
                                        {discount?.toLocaleString()}{" "}
                                        <sup>
                                            <strong>đ</strong>
                                        </sup>
                                    </p>
                                )}
                            </div>
                        }
                    />
                </Card>
            </Badge.Ribbon>
        </Link>
    );
};
