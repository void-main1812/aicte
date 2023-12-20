import { Button } from "@/components/ui/Button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import React, { use, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchScholarShip } from "@/slices/ScholarShipSlice";
import { AppDispatch, RootState } from "@/store/store";
import { fetchCourses } from "@/slices/InstitutionSlice";
import { fetchInstitutes } from "@/slices/CourseSlice";
import { fetchFaculties } from "@/slices/FacultySlice";

const FrequentlySearched = ({
  searchParams,
}: {
  searchParams: { id: string | undefined };
}) => {
  const courseEntities = useSelector((state: RootState) => state.course);

  const scholarShipEntities = useSelector(
    (state: RootState) => state.scholarship
  );

  const instituteEntities = useSelector((state: RootState) => state.institute);

  const facultyEntities = useSelector((state: RootState) => state.faculty);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchScholarShip());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchInstitutes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFaculties());
  }, [dispatch]);

  const course = courseEntities.entities;
  const scholarship = scholarShipEntities.entities;
  const institute = instituteEntities.entities;
  const faculty = facultyEntities.entities;

  console.log(faculty);
  // const { courseEntities } = useSelector((state: RootState) => state.course);

  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchCourses());
  //   dispatch(fetchScholarShip());
  // });

  return (
    <div className="w-full justify-start items-start flex flex-col gap-y-8">
      <h1 className="text-3xl font-bold">Most Frequently Searched Results</h1>
      <Tabs
        defaultValue="Colleges"
        className="w-full flex flex-col justify-start items-start gap-y-4"
      >
        <TabsList className="grid w-[40%] grid-cols-4">
          <TabsTrigger value="Colleges">Colleges</TabsTrigger>
          <TabsTrigger value="Scholarships">Scholarships</TabsTrigger>
          <TabsTrigger value="Faculties">Faculties</TabsTrigger>
          <TabsTrigger value="Password">Courses</TabsTrigger>
        </TabsList>
        <div className="w-full h-[80vh] bg-gray-50 rounded-xl border border-black/10 flex justify-start items-start overflow-y-scroll p-2">
          <TabsContent value="Colleges" className="w-full p-2">
            <div className="w-full py-2 flex justify-between items-center bg-white sticky top-0 right-0">
              <p className="text-black font-semibold w-[25vw]">Name</p>
              <p className="text-black font-semibold w-[10vw] ">State</p>
              <p className="text-black font-semibold w-[10vw] ">AICTE ID</p>
            </div>
            {scholarship.slice(0, 10).map((item: any, key: any) => (
              <div
                key={key}
                className="p-4 my-2 border-b-[1px] flex w-full justify-between items-center px-4"
              >
                <p className="truncate w-[25vw] font-semibold text-black">
                  {item.institute_name_address}
                </p>
                <p className=" font-light text-black/50 py-1 bg-amber-50 border-[1px] border-amber-500 text-amber-500 rounded-md w-[10vw] text-center">
                  {item.institute_id}
                </p>
                <p className=" font-light text-black w-[10vw] truncate">
                  {item.name_of_student}
                </p>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="Scholarships" className="w-full p-2">
            <div className="w-full py-2 flex justify-between items-center bg-white sticky top-0 right-0">
              <p className="text-black font-semibold w-[25vw]">Institute</p>
              <p className="text-black font-semibold w-[10vw] ">Amount</p>
              <p className="text-black font-semibold w-[10vw] ">Student</p>
            </div>
            {scholarship.slice(0, 10).map((item: any, key: any) => (
              <div
                key={key}
                className="p-4 my-2 border-b-[1px] flex w-full justify-between items-center px-4"
              >
                <p className="truncate w-[25vw] font-semibold text-black">
                  {item.institute_name_address}
                </p>
                <p className=" font-light text-black/50 w-[10vw] py-1 text-center text-green-500 bg-green-50 border-[1px] rounded-md border-green-500">
                  Rs.{item.amount_released}
                </p>
                <p className=" font-light text-black w-[10vw] truncate">
                  {item.name_of_student}
                </p>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="Faculties" className="w-full p-2">
            <div className="w-full py-2 flex justify-between items-center bg-white sticky top-0 right-0">
              <p className="text-black font-semibold w-[25vw]">Name</p>
              <p className="text-black font-semibold w-[10vw] ">Faculty_id</p>
              <p className="text-black font-semibold w-[10vw] ">Joining Date</p>
            </div>
            {faculty.slice(0, 10).map((item: any, key: any) => (
              <div
                key={key}
                className="p-4 my-2 border-b-[1px] flex w-full justify-between items-center px-4"
              >
                <p className="truncate w-[25vw] font-semibold text-black">
                  {item.name}
                </p>
                <p className=" font-light text-black/50 w-[12vw] py-1 text-center text-yellow-500 bg-yellow-50 border-[1px] rounded-md border-yellow-500">
                  Rs.{item.faculty_id}
                </p>
                <p className=" font-light text-black w-[10vw] truncate">
                  {item.date_of_joining}
                </p>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="Password" className="w-full p-2">
            <div className="w-full py-2 flex justify-between items-center bg-white sticky top-0 right-0">
              <p className="text-black font-semibold w-[25vw]">Course</p>
              <p className="text-black font-semibold w-[10vw] ">Duration</p>
              <p className="text-black font-semibold w-[10vw] ">Platform</p>
            </div>
            {course.slice(0, 10).map((item: any, key: any) => {
              return (
                <div
                  key={key}
                  className="p-4 my-2 border-b-[1px] flex w-full justify-between items-center px-4"
                >
                  <p className="truncate w-[25vw] font-semibold text-black">
                    {item.course_name}
                  </p>
                  <p className=" font-light text-black/50 w-[10vw] py-1 text-center text-blue-500 bg-blue-50 border-[1px] rounded-md border-blue-500">
                    {item.duration}
                  </p>
                  <p className=" font-light text-black w-[10vw]">
                    {item.platform}
                  </p>
                </div>
              );
            })}
          </TabsContent>
        </div>
      </Tabs>
      <Button className="w-[15vw] shadow-lg shadow-black/25" size={"lg"}>
        View More
      </Button>
    </div>
  );
};

export default FrequentlySearched;
