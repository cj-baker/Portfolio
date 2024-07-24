
mobile();
function mobile(){

    const mql = window.matchMedia('screen and (max-width: 575px)');

    checkMedia(mql);
    mql.addListener(checkMedia);

    function checkMedia(mql){

        if(mql.matches){

            console.log('Mobile');
            tsParticles.load("tsparticles", {
                fullScreen: {
                  enable: false,
                },
                fpsLimit: 60,
                particles: {
                  number: {
                    value: 100,
                  },
                  links: {
                    enable: true,
                    distance: 100,
                  },
                  move: {
                    enable: true,
                    speed: 2,
                    outModes: {
                      default: "bounce",
                    },
                  },
                  size: {
                    value: { min: 1, max: 3 }
                  },
                  shape: {
                    type: ["circle", "square", "triangle", "polygon"],
                    options: {
                        polygon: [
                            {
                                sides: 5
                            },
                            {
                                sides: 6
                            },
                            {
                                sides: 8
                            }
                        ]
                    }
                },
                },
            });
        }
    }
}

tablet();
function tablet(){

    const mql = window.matchMedia('screen and (min-width: 576px) and (max-width: 991px)');

    checkMedia(mql);
    mql.addListener(checkMedia);

    function checkMedia(mql){

        if(mql.matches){

            console.log('tablet');
            tsParticles.load("tsparticles", {
                fullScreen: {
                  enable: false,
                },
                fpsLimit: 60,
                particles: {
                  number: {
                    value: 100,
                  },
                  links: {
                    enable: true,
                    distance: 100,
                  },
                  move: {
                    enable: true,
                    speed: 2,
                    outModes: {
                      default: "bounce",
                    },
                  },
                  size: {
                    value: { min: 1, max: 3 }
                  },
                  shape: {
                    type: ["circle", "square", "triangle", "polygon"],
                    options: {
                        polygon: [
                            {
                                sides: 5
                            },
                            {
                                sides: 6
                            },
                            {
                                sides: 8
                            }
                        ]
                    }
                },
                },
            });
        }
    }
}


desktop();
function desktop(){

    const mql = window.matchMedia('screen and (min-width: 992px)');

    checkMedia(mql);
    mql.addListener(checkMedia);

    function checkMedia(mql){

        if(mql.matches){

            console.log('desktop');
            tsParticles.load("tsparticles", {
                fullScreen: {
                  enable: false,
                },
                fpsLimit: 60,
                particles: {
                  number: {
                    value: 100,
                  },
                  links: {
                    enable: true,
                    distance: 200,
                  },
                  move: {
                    enable: true,
                    speed: 2,
                    outModes: {
                      default: "bounce",
                    },
                  },
                  size: {
                    value: { min: 1, max: 3 }
                  },
                  shape: {
                    type: ["circle", "square", "triangle", "polygon"],
                    options: {
                        polygon: [
                            {
                                sides: 5
                            },
                            {
                                sides: 6
                            },
                            {
                                sides: 8
                            }
                        ]
                    }
                },
                },
            });
        }
    }
}






