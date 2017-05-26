function getCrossHairData(id) {
    var data = [];
    data.push(
        {
            id: "mildotwithhalfwindagelines",
            opacity: 0.8,
            thickPost : {
                display: true,
                lineThickness:0.8,
                endPostAngle: 90, // 90 is no angled end.
                horizontal : {
                    distanceMoA: 17.19
                },
                vertical : {
                    displayTop: true,
                    displayBottom: true,
                    distanceMoA: 17.19
                }
            },
            thinLine : {
                lineThickness : 0.07
            },
            horizontalPoints: [
                { distanceMoA: 1.719, style: 'line', length: 0.4, width: 0.07 },
                { distanceMoA: 3.438, style: 'dot', diameter: 0.4 },
                { distanceMoA: 5.157, style: 'line', length: 0.4, width: 0.07},
                { distanceMoA: 6.876, style: 'dot', diameter: 0.4 },
                { distanceMoA: 8.595, style: 'line', length: 0.4, width: 0.07 },
                { distanceMoA: 10.314, style: 'dot', diameter: 0.4 },
                { distanceMoA: 12.033, style: 'line', length: 0.4, width: 0.07 },
                { distanceMoA: 13.752, style: 'dot', diameter: 0.4 },
                { distanceMoA: 15.471, style: 'line', length: 0.4, width: 0.07 }
            ],
            verticalPoints: [
                { distanceMoA: -3.438, style: 'dot', diameter: 0.4 },
                { distanceMoA: -6.876, style: 'dot', diameter: 0.4 },
                { distanceMoA: -10.314, style: 'dot', diameter: 0.4 },
                { distanceMoA: -13.752, style: 'dot', diameter: 0.4 },
                { distanceMoA: 3.438, style: 'dot', diameter: 0.4 },
                { distanceMoA: 6.876, style: 'dot', diameter: 0.4 },
                { distanceMoA: 10.314, style: 'dot', diameter: 0.4 },
                { distanceMoA: 13.752, style: 'dot', diameter: 0.4 }
            ]
        });

    data.push(
        {
            id: "mildot",
            opacity: 0.8,
            thickPost : {
                display: true,
                lineThickness:0.8,
                endPostAngle: 90, // 90 is no angled end.
                horizontal : {
                    distanceMoA: 17.19
                },
                vertical : {
                    displayTop: true,
                    displayBottom: true,
                    distanceMoA: 17.19
                }
            },
            thinLine : {
                lineThickness : 0.07
            },
            horizontalPoints: [
                { distanceMoA: 3.438, style: 'dot', diameter: 0.4 },
                { distanceMoA: 6.876, style: 'dot', diameter: 0.4 },
                { distanceMoA: 10.314, style: 'dot', diameter: 0.4 },
                { distanceMoA: 13.752, style: 'dot', diameter: 0.4 }
            ],
            verticalPoints: [
                { distanceMoA: -3.438, style: 'dot', diameter: 0.4 },
                { distanceMoA: -6.876, style: 'dot', diameter: 0.4 },
                { distanceMoA: -10.314, style: 'dot', diameter: 0.4 },
                { distanceMoA: -13.752, style: 'dot', diameter: 0.4 },
                { distanceMoA: 3.438, style: 'dot', diameter: 0.4 },
                { distanceMoA: 6.876, style: 'dot', diameter: 0.4 },
                { distanceMoA: 10.314, style: 'dot', diameter: 0.4 },
                { distanceMoA: 13.752, style: 'dot', diameter: 0.4 }
            ]
        });

    data.push(
        {
            id: "natoret16",
            opacity: 0.8,
            thickPost : {
                display: true,
                lineThickness:3/1.6,
                endPostAngle: 90, // 90 is no angled end.
                horizontal : {
                    distanceMoA: 20/1.6
                },
                vertical : {
                    displayTop: false,
                    displayBottom: true,
                    distanceMoA: 20/1.6
                }
            },
            thinLine : {
                lineThickness : 0.15
            },
            horizontalPoints: [
                { distanceMoA: 3.125, style: 'line', length: 2, width: 0.15 },
                { distanceMoA: 6.25, style: 'line', length: 3.5, width: 0.15 },
                { distanceMoA: 9.375, style: 'line', length: 2, width: 0.15 }
            ],
            verticalPoints: [
                { distanceMoA: -8/1.6, style: 'line', length: 3.5, width: 0.15 },
                { distanceMoA: -16/1.6, style: 'line', length: 2, width: 0.15 }
            ]
        });

    data.push(
        {
            id: "3030ret",
            opacity: 0.7,
            thickPost : {
                display: true,
                lineThickness:0.5,
                endPostAngle: 25, // 90 is no angled end.
                horizontal : {
                    distanceMoA: 2.6
                },
                vertical : {
                    displayTop: true,
                    displayBottom: true,
                    distanceMoA: 2.6
                }
            },
            thinLine : {
                lineThickness : 0.08
            },
            horizontalPoints: [],
            verticalPoints: []
        });

    data.push(
        {
            id: "cross",
            opacity: 0.7,
            thickPost : {
                display: false,
                lineThickness:0.5,
                endPostAngle: 90, // 90 is no angled end.
                horizontal : {
                    distanceMoA: 2.6
                },
                vertical : {
                    displayTop: false,
                    displayBottom: false,
                    distanceMoA: 2.6
                }
            },
            thinLine : {
                lineThickness : 0.1
            },
            horizontalPoints: [],
            verticalPoints: []
        }
    );

    data.push(
        {
            id: "marchmtrft",
            opacity: 0.7,
            thickPost : {
                display: true,
                lineThickness:0.5/0.8,
                endPostAngle: 90, // 90 is no angled end.
                horizontal : {
                    distanceMoA: 22.05 /0.8
                },
                vertical : {
                    displayTop: false,
                    displayBottom: true,
                    distanceMoA: 22.05 /0.8
                }
            },
            thinLine : {
                lineThickness : 0.1 /0.8
            },
            horizontalPoints: [
                { distanceMoA: 3.15/0.8, style: 'line', length: 1/0.8, width: 0.1/0.8 },
                { distanceMoA: 6.3/0.8, style: 'line', length: 3/0.8, width: 0.1/0.8 },
                { distanceMoA: 9.45/0.8, style: 'line', length: 1/0.8, width: 0.1/0.8 },
                { distanceMoA: 13/0.8, style: 'line', length: 3 /0.8, width: 0.1/0.8 },
                { distanceMoA: 16.15/0.8, style: 'line', length: 1/0.8, width: 0.1/0.8 },
                { distanceMoA: 19.3/0.8, style: 'line', length: 3/0.8, width: 0.1/0.8 }
            ],
            verticalPoints: [
                { distanceMoA: -6.3/0.8, style: 'line', length: 2/0.8, width: 0.1/0.8 },
                { distanceMoA: -12.6/0.8, style: 'line', length: 2/0.8, width: 0.1/0.8 },
                { distanceMoA: -18.9/0.8, style: 'line', length: 2/0.8, width: 0.1/0.8 }
            ]


        }
    );



    return findById(data,id);
}