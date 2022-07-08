const checkapi = async () => {
  document.getElementById("riot").innerHTML = "checking...";
  try {
    const response = await fetch(
      "https://oc1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/2ENqPUNY_TPniBmhqioOcoqFnB3GF22i8PGoH1gf-3yNQw?api_key=RGAPI-75b67a8e-6e4b-44eb-8524-732d7275d624"
    );
    document.getElementById("riot").innerHTML =
      "wait it's actually up for once";
    document.getElementById("api button").innerHTML = "wow that's crazy";
  } catch (err) {
    document.getElementById("api button").innerHTML = "pray it works this time";
    document.getElementById("riot").innerHTML = "of course it's down.";
  }
};
