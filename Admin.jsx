import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const data = [
    { name: "Work From Office", value: 592, color: "#6366f1" },
    { name: "Work From Home", value: 267, color: "#e2e8f0" },
];

const YourComponent = () => {
    return (
        <div>
            {}
            <Card>
                <CardContent>
                    <h2>Work Distribution</h2> {}

                    {}
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                            >
                                }
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Button to view more details */}
                    <Button variant="primary">View More</Button>
                </CardContent>
            </Card>
        </div>
    );
};

