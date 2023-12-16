import { Button } from "@/components/ui/Button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";

const FrequentlySearched = () => {
  return (
    <div className="w-full justify-start items-start flex flex-col gap-y-8">
      <h1 className="text-3xl font-bold">Most Frequently Searched Results</h1>
      <Tabs
        defaultValue="Collages"
        className="w-full flex flex-col justify-start items-start gap-y-4"
      >
        <TabsList className="grid w-[40%] grid-cols-4">
          <TabsTrigger value="Collages">Collages</TabsTrigger>
          <TabsTrigger value="Scholarships">Scholarships</TabsTrigger>
          <TabsTrigger value="Faculties">Faculties</TabsTrigger>
          <TabsTrigger value="Password">Courses</TabsTrigger>
        </TabsList>
        <div className="w-full h-[80vh] bg-gray-50 rounded-xl border border-black/10 flex justify-center items-center">
          <TabsContent value="Collages"> Collage Data </TabsContent>
          <TabsContent value="Scholarships"> Scholarships Data </TabsContent>
          <TabsContent value="Faculties"> Faculty Data </TabsContent>
          <TabsContent value="Password"> Course Data </TabsContent>
        </div>
      </Tabs>
      <Button className="w-[15vw] shadow-lg shadow-black/25" size={"lg"}>
        View More
      </Button>
    </div>
  );
};

export default FrequentlySearched;
