function getCourseInfo(id) {

    var courseInfo = [];
    courseInfo.push(
        {
            id: "yorkWinterLeagueCourse",
            desc: "York Winter League",
            zeroRangeAngle: 0,
            meanWind: 4,
            course: [
                { range:52, killzone: 40, angle:345, additionalWind:1, target: "MP" },
                { range:41, killzone: 40, angle:10, additionalWind:0, target: "SQ" },

                { range:47, killzone: 40, angle:330, additionalWind:0, target: "GSQ" },
                { range:55, killzone: 40, angle:5, additionalWind:0, target: "ROOK" },

                { range:45, killzone: 40, angle:350, additionalWind:0, target: "SQ" },
                { range:37, killzone: 40, angle:20, additionalWind:0, target: "RAT" },

                { range:50, killzone: 40, angle:345, additionalWind:0, target: "MP" },
                { range:45, killzone: 40, angle:15, additionalWind:0, target: "SQ" },

                { range:18, killzone: 15, angle:355, additionalWind:1, target: "RAT" },
                { range:42, killzone: 40, angle:0, additionalWind:0, target: "SQ" },

                { range:18, killzone: 40, angle:355, additionalWind:0, target: "SQ", comment: "Standing", wobbleFactor: 2.25  }, //S
                { range:35, killzone: 40, angle:20, additionalWind:0, target: "SQ", comment: "Standing", wobbleFactor: 2.25 },

                { range:54, killzone: 40, angle:330, additionalWind:1, target: "SQ" },
                { range:49, killzone: 40, angle:345, additionalWind:0, target: "RB" },

                { range:45, killzone: 40, angle:355, additionalWind:0, target: "RAT" },
                { range:44, killzone: 40, angle:30, additionalWind:0, target: "GSQ" },

                { range:51, killzone: 40, angle:0, additionalWind:0, target: "SQ" },
                { range:43, killzone: 40, angle:10, additionalWind:1, target: "MP" },

                { range:44, killzone: 40, angle:0, additionalWind:0, target: "SQ", comment: "Kneeling", wobbleFactor: 1.5 }, //K
                { range:21, killzone: 40, angle:15, additionalWind:0, target: "ROOK", comment: "Kneeling", wobbleFactor: 1.5 },

                { range:53, killzone: 40, angle:10, additionalWind:0, target: "GSQ" },
                { range:43, killzone: 40, angle:15, additionalWind:0, target: "SQ" },

                { range:44, killzone: 40, angle:345, additionalWind:0, target: "SQ" },
                { range:33, killzone: 25, angle:355, additionalWind:1, target: "RB" },

                { range:48, killzone: 40, angle:315, additionalWind:0, target: "RAT" },
                { range:55, killzone: 40, angle:10, additionalWind:0, target: "MP" },

                { range:25, killzone: 40, angle:350, additionalWind:0, target: "SQ", comment: "Standing", wobbleFactor: 2.25 }, //S
                { range:42, killzone: 40, angle:10, additionalWind:1, target: "MP", comment: "Standing", wobbleFactor: 2.25 },

                { range:31, killzone: 25, angle:345, additionalWind:1, target: "RB" },
                { range:44, killzone: 40, angle:355, additionalWind:2, target: "RAT" }

            ]
        }
    );

    courseInfo.push(
        {
            id: "inters2014",
            desc: "2014 Inter-Regional course",
            zeroRangeAngle: 75,
            meanWind: 7,
            course: [
                { range:51, killzone: 40, angle: 230, additionalWind: 0, target: "MP" },
                { range:31, killzone: 25, angle: 315, additionalWind: 0, target: "RB" },
                { range:49, killzone: 40, angle: 215, additionalWind: 0, target: "SQ" },
                { range:48, killzone: 40, angle: 300, additionalWind: 0, target: "ROOK" },
                { range:44, killzone: 40, angle: 265, additionalWind: 0, target: "RAT" },
                { range:49, killzone: 40, angle: 350, additionalWind: 0, target: "MP" },
                { range:14, killzone: 15, angle: 290, additionalWind: 0, target: "SQ" },
                { range:43, killzone: 40, angle: 350, additionalWind: 0, target: "RAT" },
                { range:47, killzone: 40, angle: 270, additionalWind: 0, target: "MP" },
                { range:54, killzone: 40, angle: 350, additionalWind: 0, target: "RAT" },
                { range:30, killzone: 40, angle: 290, additionalWind: 0, target: "SQ", comment: "Standing", wobbleFactor: 2.25 }, //S
                { range:43, killzone: 40, angle: 315, additionalWind: 0, target: "MP", comment: "Standing", wobbleFactor: 2.25 }, //S
                { range:51, killzone: 40, angle: 315, additionalWind: 0, target: "SQ" },
                { range:31, killzone: 25, angle: 10, additionalWind: 0, target: "MP" },
                { range:48, killzone: 40, angle: 305, additionalWind: 0, target: "RAT" },
                { range:43, killzone: 40, angle: 15, additionalWind: 0, target: "MP" },
                { range:47, killzone: 40, angle: 320, additionalWind: 0, target: "GSQ" },
                { range:46, killzone: 40, angle: 0, additionalWind: 0, target: "MP" },
                { range:36, killzone: 40, angle: 305, additionalWind: 0, target: "SQ", comment: "Kneeling", wobbleFactor: 1.5 }, //K
                { range:38, killzone: 40, angle: 350, additionalWind: 0, target: "MP", comment: "Kneeling", wobbleFactor: 1.5 }, //K
                { range:48, killzone: 40, angle: 320, additionalWind: 0, target: "RAT" },
                { range:50, killzone: 40, angle: 0, additionalWind: 0, target: "SQ" },
                { range:40, killzone: 40, angle: 345, additionalWind: 0, target: "MP" },
                { range:16, killzone: 15, angle: 0, additionalWind: 0, target: "RAT" },
                { range:48, killzone: 40, angle: 0, additionalWind: 0, target: "ROOK" },
                { range:33, killzone: 25, angle: 45, additionalWind: 0, target: "MP" },
                { range:37, killzone: 40, angle: 320, additionalWind: 0, target: "RB", comment: "Standing", wobbleFactor: 2.25 }, //S
                { range:27, killzone: 40, angle: 10, additionalWind: 0, target: "SQ", comment: "Standing", wobbleFactor: 2.25 }, //S
                { range:44, killzone: 40, angle: 310, additionalWind: 0, target: "MP" },
                { range:49, killzone: 40, angle: 340, additionalWind: 0, target: "RB" },
                { range:39, killzone: 40, angle: 300, additionalWind: 0, target: "ROOK" },
                { range:49, killzone: 40, angle: 320, additionalWind: 0, target: "RAT" },
                { range:26, killzone: 25, angle: 170, additionalWind: 0, target: "SQ" },
                { range:49, killzone: 40, angle: 190, additionalWind: 0, target: "MP" },
                { range:37, killzone: 40, angle: 160, additionalWind: 0, target: "GSQ", comment: "Kneeling", wobbleFactor: 1.5 }, //K
                { range:42, killzone: 40, angle: 180, additionalWind: 0, target: "RAT", comment: "Kneeling", wobbleFactor: 1.5 }, //K
                { range:44, killzone: 40, angle: 45, additionalWind: 0, target: "MP" },
                { range:50, killzone: 40, angle: 170, additionalWind: 0, target: "SQ" },
                { range:46, killzone: 40, angle: 35, additionalWind: 0, target: "GSQ" },
                { range:40, killzone: 40, angle: 200, additionalWind: 0, target: "RAT" }            ]
        }
    );

    courseInfo.push(
        {
            id: "mendip2014",
            desc: "SWEFTA League 4 (Mendip)",
            zeroRangeAngle: 90,
            meanWind: 6,
            course: [
                { range:44, killzone: 40, angle: 300, additionalWind: 1, target: "ROOK" },
                { range:36, killzone: 30, angle: 330, additionalWind: 1, target: "SQ" },
                { range:15, killzone: 25, angle: 210, additionalWind: -1, target: "RAT", comment: "Standing", wobbleFactor: 2.25 },
                { range:24, killzone: 40, angle: 300, additionalWind: 1, target: "SQ", comment: "Standing", wobbleFactor: 2.25 },
                { range:44, killzone: 40, angle: 270, additionalWind: 1, target: "RAT" },
                { range:11, killzone: 12, angle: 300, additionalWind: 0, target: "RAT" },
                { range:38, killzone: 40, angle: 210, additionalWind: 0, target: "SQ" },
                { range:48, killzone: 40, angle: 310, additionalWind: 1, target: "SQ" },
                { range:45, killzone: 40, angle: 250, additionalWind: 1, target: "RAT", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:34, killzone: 40, angle: 270, additionalWind: 0, target: "RB", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:46, killzone: 40, angle: 195, additionalWind: 1, target: "RAT" },
                { range:53, killzone: 40, angle: 280, additionalWind: 2, target: "SQ" },
                { range:39, killzone: 30, angle: 240, additionalWind: 0, target: "RB" },
                { range:23, killzone: 13, angle: 270, additionalWind: 0, target: "RAT" },
                { range:36, killzone: 40, angle: 270, additionalWind: 0, target: "MOON", comment: "Standing", wobbleFactor: 2.25  },
                { range:18, killzone: 40, angle: 280, additionalWind: 0, target: "ROOK", comment: "Standing", wobbleFactor: 2.25  },
                { range:48, killzone: 40, angle: 230, additionalWind: 1, target: "MP" },
                { range:41, killzone: 40, angle: 250, additionalWind: 0, target: "RB" },
                { range:48, killzone: 40, angle: 270, additionalWind: 1, target: "MP" },
                { range:43, killzone: 40, angle: 330, additionalWind: 1, target: "SQ" },
                { range:33, killzone: 30, angle: 275, additionalWind: 1, target: "RAT" },
                { range:49, killzone: 40, angle: 270, additionalWind: 0, target: "RAT" },
                { range:46, killzone: 40, angle: 210, additionalWind: 0, target: "ROOK" },
                { range:55, killzone: 40, angle: 320, additionalWind: 2, target: "ROOK" },
                { range:48, killzone: 40, angle: 240, additionalWind: 1, target: "MOON" },
                { range:29, killzone: 25, angle: 330, additionalWind: 0, target: "RB" },
                { range:37, killzone: 40, angle: 220, additionalWind: 0, target: "RB", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:40, killzone: 40, angle: 270, additionalWind: 0, target: "RB", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:37, killzone: 40, angle: 300, additionalWind: 0, target: "MP" },
                { range:32, killzone: 25, angle: 320, additionalWind: -1, target: "RB" },
                { range:48, killzone: 40, angle: 275, additionalWind: 2, target: "SQ" },
                { range:53, killzone: 40, angle: 285, additionalWind: 2, target: "SQ" },
                { range:49, killzone: 40, angle: 270, additionalWind: 1, target: "SQ" },
                { range:34, killzone: 40, angle: 315, additionalWind: -1, target: "RAT" },
                { range:41, killzone: 40, angle: 275, additionalWind: 0, target: "ROOK" },
                { range:25, killzone: 20, angle: 315, additionalWind: 1, target: "SQ" },
                { range:54, killzone: 40, angle: 215, additionalWind: 2, target: "ROOK" },
                { range:40, killzone: 40, angle: 280, additionalWind: 0, target: "SQ" },
                { range:54, killzone: 40, angle: 215, additionalWind: 1, target: "ROOK" },
                { range:49, killzone: 40, angle: 295, additionalWind: 0, target: "MP" }            ]
        }
    );

    courseInfo.push(
        {
            id: "tecnotargetopen2014",
            desc: "TecnoTargets Open (May, 2014) ",
            zeroRangeAngle: 0,
            meanWind: 5,
            course: [
                { range:54, killzone: 40, angle: 10, additionalWind: 0, target: "TRB" },
                { range:47, killzone: 40, angle: 45, additionalWind: 0, target: "TPART" },
                { range:37, killzone: 25, angle: 355, additionalWind: 0, target: "TJACK" },
                { range:55, killzone: 40, angle: 10, additionalWind: 0, target: "TRB" },
                { range:21, killzone: 15, angle: 350, additionalWind: 0, target: "TJACK" },
                { range:46, killzone: 40, angle: 15, additionalWind: 0, target: "TWOOD" },
                { range:46, killzone: 40, angle: 20, additionalWind: 0, target: "TJACK" },
                { range:49, killzone: 40, angle: 50, additionalWind: 0, target: "TRB" },
                { range:48, killzone: 40, angle: 95, additionalWind: 0, target: "TPART" },
                { range:36, killzone: 25, angle: 125, additionalWind: 0, target: "TSTAR" },
                { range:54, killzone: 40, angle: 90, additionalWind: 0, target: "TRB" },
                { range:39, killzone: 40, angle: 100, additionalWind: 0, target: "TWOOD" },
                { range:21, killzone: 25, angle: 65, additionalWind: 0, target: "TRB", comment: "Standing", wobbleFactor: 2.25 },
                { range:38, killzone: 40, angle: 90, additionalWind: 0, target: "TWOOD", comment: "Standing", wobbleFactor: 2.25 },
                { range:44, killzone: 40, angle: 40, additionalWind: 1, target: "TJACK" },
                { range:37, killzone: 40, angle: 85, additionalWind: 1, target: "TJACK" },
                { range:42, killzone: 40, angle: 100, additionalWind: 1, target: "TRB" },
                { range:22, killzone: 15, angle: 155, additionalWind: 1, target: "TPART" },
                { range:44, killzone: 40, angle: 85, additionalWind: 1, target: "TPART" },
                { range:55, killzone: 40, angle: 105, additionalWind: 1, target: "TWOOD" },
                { range:54, killzone: 40, angle: 75, additionalWind: 1, target: "TJACK" },
                { range:44, killzone: 40, angle: 100, additionalWind: 1, target: "TPART" },
                { range:22, killzone: 25, angle: 35, additionalWind: 1, target: "TJACK", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:30, killzone: 40, angle: 70, additionalWind: 1, target: "TPART", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:36, killzone: 40, angle: 105, additionalWind: 2, target: "TWOOD" },
                { range:46, killzone: 40, angle: 180, additionalWind: 2, target: "TPART" },
                { range:36, killzone: 25, angle: 160, additionalWind: 3, target: "TPART" },
                { range:51, killzone: 40, angle: 180, additionalWind: 3, target: "TWOOD" },
                { range:52, killzone: 40, angle: 190, additionalWind: 3, target: "TWOOD" },
                { range:49, killzone: 40, angle: 215, additionalWind: 3, target: "TPART" },
                { range:54, killzone: 40, angle: 205, additionalWind: 3, target: "TPART" },
                { range:45, killzone: 40, angle: 220, additionalWind: 3, target: "TPART" },
                { range:21, killzone: 15, angle: 180, additionalWind: 3, target: "TRB" },
                { range:40, killzone: 40, angle: 195, additionalWind: 2, target: "TRB" },
                { range:51, killzone: 40, angle: 200, additionalWind: 4, target: "TRB" },
                { range:49, killzone: 40, angle: 205, additionalWind: 3, target: "TRB" },
                { range:24, killzone: 25, angle: 205, additionalWind: 3, target: "TRB" },
                { range:49, killzone: 40, angle: 225, additionalWind: 2, target: "TPART" },
                { range:49, killzone: 40, angle: 220, additionalWind: 3, target: "TPART" },
                { range:45, killzone: 40, angle: 230, additionalWind: 3, target: "TRB" },
                { range:30, killzone: 40, angle: 220, additionalWind: 3, target: "TPART", comment: "Standing", wobbleFactor: 2.25 },
                { range:22, killzone: 25, angle: 240, additionalWind: 4, target: "TRB", comment: "Standing", wobbleFactor: 2.25 },
                { range:21, killzone: 15, angle: 230, additionalWind: 0, target: "TSTAR" },
                { range:49, killzone: 40, angle: 260, additionalWind: 0, target: "TWOOD" },
                { range:49, killzone: 40, angle: 275, additionalWind: 0, target: "TWOOD" },
                { range:40, killzone: 40, angle: 300, additionalWind: 0, target: "TWOOD" },
                { range:39, killzone: 40, angle: 265, additionalWind: 0, target: "TPART", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:19, killzone: 25, angle: 300, additionalWind: 0, target: "TWOOD", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:45, killzone: 40, angle: 230, additionalWind: 0, target: "TPART" },
                { range:44, killzone: 40, angle: 270, additionalWind: 0, target: "TRB" },
                { range:48, killzone: 40, angle: 235, additionalWind: 0, target: "TPART" },
                { range:34, killzone: 25, angle: 270, additionalWind: 0, target: "TJACK" }
            ]
        }
    );

    courseInfo.push(
        {
            id: "643FT",
            desc: "643FT Club course - New Zealand",
            zeroRangeAngle: 0,
            meanWind: 6,
            course: [
                { range:45, killzone: 40, angle: 90, additionalWind: -1, target: "RAT" },
                { range:21, killzone: 25, angle: 90, additionalWind: 1, target: "RAT" },
                { range:14, killzone: 25, angle: 67.5, additionalWind: -1, target: "RAT", comment: "Standing", wobbleFactor: 2.25 },
                { range:18, killzone: 40, angle: 67.5, additionalWind: -1, target: "RAT", comment: "Standing", wobbleFactor: 2.25 },
                { range:30, killzone: 40, angle: 45, additionalWind: -1, target: "GSQ" },
                { range:40, killzone: 40, angle: 45, additionalWind: -1, target: "RAT" },
                { range:54, killzone: 40, angle: 22.5, additionalWind: 0, target: "RAT" },
                { range:19, killzone: 25, angle: 22.5, additionalWind: 1, target: "RAT" },
                { range:42, killzone: 40, angle: 22.5, additionalWind: 1, target: "RAT" },
                { range:42, killzone: 40, angle: 22.5, additionalWind: 2, target: "RAT", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:21, killzone: 25, angle: 22.5, additionalWind: 0, target: "RAT", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:41, killzone: 40, angle: 22.5, additionalWind: 0, target: "RAT" },
                { range:52, killzone: 40, angle: 0, additionalWind: 0, target: "RAT" },
                { range:31, killzone: 40, angle: 0, additionalWind: 4, target: "GSQ" },
                { range:55, killzone: 40, angle: 0, additionalWind: 4, target: "RAT" },
                { range:53, killzone: 40, angle: 0, additionalWind: 1, target: "RAT" },
                { range:25, killzone: 40, angle: 0, additionalWind: 3, target: "RAT" },
                { range:18, killzone: 25, angle: 337.5, additionalWind: 3, target: "GSQ" },
                { range:12, killzone: 15, angle: 337.5, additionalWind: 3, target: "RAT" },
                { range:11, killzone: 15, angle: 67.5, additionalWind: 3, target: "RAT" }
            ]
        }
    );

    courseInfo.push(
        {
            id: "Shebbear",
            desc: "Shebbear club course",
            zeroRangeAngle: 0,
            meanWind: 8,
            course: [
                { range:37, killzone: 40, angle: 340, additionalWind: -1, target: "RB" },
                { range:29, killzone: 40, angle: 340, additionalWind: -1, target: "RAT" },
                { range:29, killzone: 25, angle: 350, additionalWind: -1, target: "MOON" },
                { range:16, killzone: 15, angle: 350, additionalWind: -1, target: "MOON" },
                { range:38, killzone: 40, angle: 0, additionalWind: 0, target: "SQ" },
                { range:44, killzone: 40, angle: 0, additionalWind: 0, target: "RB" },
                { range:40, killzone: 40, angle: 15, additionalWind: 0, target: "RAT" },
                { range:12, killzone: 25, angle: 15, additionalWind: 0, target: "MOON", comment: "Standing", wobbleFactor: 2.25 },
                { range:50, killzone: 40, angle: 5, additionalWind: 1, target: "ROOK" },
                { range:24, killzone: 25, angle: 5, additionalWind: 0, target: "RAT" },
                { range:37, killzone: 25, angle: 20, additionalWind: 0, target: "MOON" },
                { range:33, killzone: 40, angle: 20, additionalWind: 0, target: "MOON", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:50, killzone: 40, angle: 0, additionalWind: 2, target: "MP" },
                { range:24, killzone: 40, angle: 0, additionalWind: 0, target: "SQ", comment: "Standing", wobbleFactor: 2.25 },
                { range:47, killzone: 40, angle: 350, additionalWind: 1, target: "SQ" },
                { range:21, killzone: 40, angle: 350, additionalWind: 0, target: "RAT", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:33, killzone: 40, angle: 340, additionalWind: 0, target: "ROOK" },
                { range:43, killzone: 40, angle: 340, additionalWind: 2, target: "ROOK" },
                { range:55, killzone: 40, angle: 310, additionalWind: 1, target: "ROOK" },
                { range:44, killzone: 40, angle: 310, additionalWind: 2, target: "RAT" },
                { range:24, killzone: 25, angle: 290, additionalWind: 1, target: "RAT" },
                { range:24, killzone: 40, angle: 290, additionalWind: 1, target: "MOON", comment: "Standing", wobbleFactor: 2.25 },
                { range:41, killzone: 40, angle: 280, additionalWind: 1, target: "RAT" },
                { range:36, killzone: 40, angle: 280, additionalWind: 1, target: "RB" },
                { range:11, killzone: 15, angle: 270, additionalWind: -2, target: "RAT" },
                { range:28, killzone: 40, angle: 260, additionalWind: -1, target: "ROOK" },
                { range:50, killzone: 40, angle: 260, additionalWind: -2, target: "RB" },
                { range:23, killzone: 25, angle: 260, additionalWind: 0, target: "MOON" },
                { range:34, killzone: 40, angle: 250, additionalWind: 0, target: "RAT", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:41, killzone: 40, angle: 250, additionalWind: 1, target: "ROOK" },
                { range:37, killzone: 40, angle: 250, additionalWind: 1, target: "ROOK" },
                { range:22, killzone: 40, angle: 250, additionalWind: 1, target: "MOON" },
                { range:18, killzone: 25, angle: 240, additionalWind: 0, target: "MOON" },
                { range:9, killzone: 25, angle: 240, additionalWind: 0, target: "MOON", comment: "Kneeling", wobbleFactor: 1.5 },
                { range:41, killzone: 40, angle: 230, additionalWind: 2, target: "RAT" },
                { range:22, killzone: 40, angle: 230, additionalWind: 2, target: "RB" },
                { range:46, killzone: 40, angle: 320, additionalWind: 2, target: "ROOK" },
                { range:31, killzone: 40, angle: 320, additionalWind: 1, target: "MP", comment: "Standing", wobbleFactor: 2.25 },
                { range:16, killzone: 15, angle: 10, additionalWind: -1, target: "MOON" },
                { range:25, killzone: 40, angle: 320, additionalWind: 2, target: "SQ" }
            ]
        }
    );

    return findById(courseInfo,id);
}

function findById(source, id) {
    for (var i = 0; i < source.length; i++) {
        if (source[i].id === id) {
            return source[i];
        }
    }
    throw "Couldn't find object with id: " + id;
}