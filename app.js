let bjp_votes = 0;
let congress_votes = 0;
let app_votes = 0;
let bsp_votes = 0;

let bjp_result = document.getElementById("bjpResult");
let congress_result = document.getElementById("congressResult");
let app_result = document.getElementById("appResult");
let bsp_result = document.getElementById("bspResult");
-
document.getElementById("bjpVote").addEventListener("click", () =>{
  bjp_votes++;
  bjp_result.innerHTML = "Votes:" + bjp_votes;
})
document.getElementById("congressVote").addEventListener("click", () =>{
  congress_votes++;
  congress_result.innerHTML = "Votes:" + congress_votes;
})
document.getElementById("appVote").addEventListener("click", () =>{
  app_votes++;
  app_result.innerHTML = "Votes:" + app_votes;
})
document.getElementById("bspVote").addEventListener("click", () =>{
  bsp_votes++;
  bsp_result.innerHTML = "Votes:" + bsp_votes;
})

document.getElementById("showResult").addEventListener("click", () => {
  if (bjp_votes > congress_votes && bjp_votes && bjp_votes > bsp_votes) {
    bjp_result.innerHTML = "MQM won the Election";
    congress_result.innerHTML = "";
    app_result.innerHTML = "";
    bsp_result.innerHTML = "";
  }
  else if (congress_votes > app_votes && congress_votes  && congress_votes > bjp_votes ) {
    bjp_result.innerHTML = "";
    congress_result.innerHTML = "PTI won the Election";
    bjp_result.innerHTML = "";
    bjp_result.innerHTML = "";
  }
  else if (app_votes > bsp_votes && app_votes && app_votes > bjp_votes) {
    bjp_result.innerHTML = "";
    congress_result.innerHTML = "";
    app_result.innerHTML = "PPP won the Election";
    bsp_result.innerHTML = "";
  }
  else if (bsp_votes > congress_votes && bsp_SWWvotes && bsp_votes > bjp_votes) {
    bjp_result.innerHTML = "";
    bjp_result.innerHTML = "";
    bjp_result.innerHTML = "";
    bjp_result.innerHTML = "PML(N) WON THE ELECTION";
  }     
  else {
    bjp_result.innerHTML = "No Result";
    congress_result.innerHTML = "No Result";
    app_result.innerHTML = "No Result";
    bsp_result.innerHTML = "No Result";
  }
  bjp_votes = 0;
  congress_votes = 0;
  app_votes = 0;
  bsp_votes = 0;
})