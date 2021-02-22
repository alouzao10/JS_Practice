// Some more practice
let team = [
  { id: 1, name: "Bob", email: "bob@job.com", qualified: true },
  { id: 2, name: "Jim", email: "jim@job.com", qualified: false },
  { id: 3, name: "Pam", email: "pam@job.com", qualified: true },
  { id: 4, name: "Lil", email: "lil@job.com", qualified: false },
  { id: 4, name: "Sam", email: "sam@job.com", qualified: true },

];
let minMembers = 3;
let minQualified = 2;

function isQualified(team){
    let qualified = team.filter((user) => user.qualified);
    return new Promise((pass, fail) => {
        if(qualified >= minQualified){
            pass({msg: 'Team Qualifies'})
        } else {
            fail({msg: 'Team NOT Qualified'})
        }
    });
}

function hasMembers(team){
    return new Promise((pass, fail) => {
        if(team.length >= minMembers){
            pass({msg: 'Enough Members'})
        } else {
            fail({msg: 'NOT Enough Members'})
        }
    });
}

 function getInfo(team) {
  let qualified =  isQualified(team);
  qualified.then((ret) => console.log(ret.msg)).catch((err) => console.log(err.msg));
  let totMembers =  hasMembers(team);
  totMembers.then((ret) => {
      console.log(ret.msg);
  }).catch((err) => {
      console.log(err.msg);
  })
};

let teamReport = getInfo(team);

console.log(Math.sqrt(3))