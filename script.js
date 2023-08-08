function showProfile(profileName) {
  const profiles = {
    matheus: {
      name: "Matheus Vinicius",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      cvPath: "assets/matheus_cv.pdf",
      imagePath: "assets/ft_matheus.png",
    },
    arquires: {
      name: "Arquires Stoco",
      bio: "Lore ipsum sobre Arquires...",
      cvPath: "assets/arquires_cv.pdf",
      imagePath: "./assets/ft_arquires.jpg",
    },
    eric: {
      name: "Éric Oliveira",
      bio: "Em busca de uma oportunidade em Cloud para colocar em prática o conteúdo absorvido durante o curso.",
      cvPath: "assets/cv_eric.pdf",
      imagePath: "./assets/ft_eric.jpg",
    },
    liliane: {
      name: "Liliane Gama",
      bio: "Estudante de Análise e desenvolvimento de sistema, Determinada, Proativa, Dedicada, em transição de carreira, em busca de uma oportunidade em Cloud.",
      cvPath: "assets/cv_liliane.pdf",
      imagePath: "./assets/ft_liliane.jpg",
    },
    thayna: {
      name: "Thayná Vianna",
      bio: "Lore ipsum sobre Thayná...",
      cvPath: "assets/cv_thayna.pdf",
      imagePath: "./assets/ft_thayna.jpg",
    },
  };

  const profile = profiles[profileName];

  const profileModal = document.getElementById("profile-modal");
  const cvModal = document.getElementById("cv-modal");
  const modalName = document.getElementById("modal-name");
  const modalImage = document.getElementById("modal-image");
  const modalBio = document.getElementById("modal-bio");
  const modalViewCv = document.getElementById("modal-view-cv");
  const modalDownloadCv = document.getElementById("modal-download-cv");
  const modalCvFrame = document.getElementById("modal-cv-frame");

  modalName.textContent = profile.name;
  modalImage.src = profile.imagePath;
  modalBio.textContent = profile.bio;

  modalViewCv.addEventListener("click", function (e) {
    e.preventDefault();
    modalCvFrame.src = profile.cvPath;
    cvModal.style.display = "flex";
  });

  modalDownloadCv.href = profile.cvPath;

  profileModal.style.display = "flex";
}

function closeCvModal() {
  const cvModal = document.getElementById("cv-modal");
  cvModal.style.display = "none";
}
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
function closeProfileModal() {
  const profileModal = document.getElementById("profile-modal");
  profileModal.style.display = "none";
}
