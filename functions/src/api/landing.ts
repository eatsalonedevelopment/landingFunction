import { NextFunction, Request, Response } from "express";
import { getCollectionRef } from "../firebase/firebaseFirestoreAccess";
import { CapabilityDataType, CompaniesDetailsType, MyInfoDataType, ProjectDataType, WorkExperienceDataType } from "../types";

export const getProjects = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let ProjectData: ProjectDataType[] = [];

        let ref = getCollectionRef({
            collectionId: "ProjectData"
        });

        await ref?.get().then(({ docs }) => {

            docs.forEach((doc) => {
                ProjectData.push(doc.data() as ProjectDataType)

            })
        });
        if (ProjectData.length > 0) {
            res.status(200);
            res.send(ProjectData)
        }

    } catch (e) {

        console.log(e);

    }
};


export const getCapabilities = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let CapabilityDataList: CapabilityDataType[] = [];

        let ref = getCollectionRef({
            collectionId: "CapabilityData"
        });

        await ref?.get().then(({ docs }) => {

            docs.forEach((doc) => {
                CapabilityDataList.push(doc.data() as CapabilityDataType)

            })
        });
        if (CapabilityDataList.length > 0) {
            res.status(200);
            res.send(CapabilityDataList)
        }

    } catch (e) {

        console.log(e);

    }
};



export const getMyInfo = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {

        let MyInfoList: MyInfoDataType[] = [];

        let ref = getCollectionRef({
            collectionId: "MyInfoData"
        });

        await ref?.get().then(({ docs }) => {

            docs.forEach((doc) => {
                MyInfoList.push(doc.data() as MyInfoDataType)

            })
        });
        if (MyInfoList.length > 0) {
            res.status(200);
            res.send(MyInfoList)
        }
    } catch (e) {

        console.log(e);

    }
}


export const getWorkExperience = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {

        let WorkExperienceList: WorkExperienceDataType = {
            southAmerica: {
                companies: []
            },
            africa: {
                companies: []
            },
            europe: {
                companies: []
            },
            australia: {
                companies: []
            },
            northAmerica: {
                companies: []
            },
            asia: {
                companies: []
            }
        };

        let ref = getCollectionRef({
            collectionId: "WorkExperienceData"
        });

        await ref?.get().then(({ docs }) => {
            docs.forEach((doc) => {
                switch (doc.get("region")) {
                    case "southAmerica": {
                        WorkExperienceList.southAmerica?.companies.push(doc.data() as CompaniesDetailsType)
                        WorkExperienceList = {
                            ...WorkExperienceList,
                            southAmerica: WorkExperienceList.southAmerica
                        }
                    }
                        break;
                    case "africa": {
                        WorkExperienceList.africa?.companies.push(doc.data() as CompaniesDetailsType)
                        WorkExperienceList = {
                            ...WorkExperienceList,
                            africa: WorkExperienceList.africa
                        }
                    }
                        break;
                    case "europe": {
                        WorkExperienceList.europe?.companies.push(doc.data() as CompaniesDetailsType)
                        WorkExperienceList = {
                            ...WorkExperienceList,
                            europe: WorkExperienceList.europe
                        }
                    }
                        break;
                    case "australia": {
                        WorkExperienceList.australia?.companies.push(doc.data() as CompaniesDetailsType)
                        WorkExperienceList = {
                            ...WorkExperienceList,
                            australia: WorkExperienceList.australia
                        }
                    }
                        break;
                    case "northAmerica": {
                        WorkExperienceList.northAmerica?.companies.push(doc.data() as CompaniesDetailsType)
                        WorkExperienceList = {
                            ...WorkExperienceList,
                            northAmerica: WorkExperienceList.northAmerica
                        }
                    }
                }
            })
            res.status(200);
            res.send(WorkExperienceList)
        });



    } catch (e) {

        console.log(e);

    }
};