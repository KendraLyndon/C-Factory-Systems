app.factory('TeamService', function(){
  return {
    teamMembers : [
      {
        name: 'Rick Bernheim',
        title: 'Founder and CEO',
        photo: '../assets/img/Rick-Bernheim.jpg',
        accomplishments: [
          'Serial high-tech entrepreneur, 11 startup/early-stage companies',
          'Led businesses to $125M',
          '5 Granted and 11 in-process patents'
        ]
      },
      {
        name: 'Dr. Ray Gottesfeld, M.D.',
        title: 'VP QA and Clinical Affairs',
        photo: '../assets/img/Ray-Gottesfeld.jpg',
        accomplishments:
        [
          'Serial entrepreneur, 6 startup/early-stage companies',
          'Chief Medical Officer of $300M Division'
        ]
      },
      {
        name: 'Frieda Sands',
        title: 'VP Marcom Secretary and Treasurer',
        photo: '../assets/img/Frieda-Sands.jpg',
        accomplishments: [
          'Serial entrepreneur, 5 startup/early-stage companies',
          'Former director and board member of various non-profits'
        ]
      }
    ]
  }
})
