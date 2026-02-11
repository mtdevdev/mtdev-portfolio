
import { PortfolioData } from '../types/portfolio';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Matheus Barboza Marçal",
  role: "Developer & Gameplay Programmer",
  location: "Itu, SP, Brasil",
  resumeUrl: "/assets/documents/cv.pdf",
  availability: "Trabalho Remoto e Presencial",
  bio: {
    intro: "Desenvolvedor focado em C# e Unity, especializando na criação de mecânicas de jogo responsivas e arquitetura de código escalável.",
    description: "Com uma abordagem analítica e criativa, dedico-me a transformar conceitos de Game Design em sistemas lógicos robustos. Meus projetos demonstram aplicação prática de Programação Orientada a Objetos (POO), Design Patterns e otimização de performance. Busco integrar times de desenvolvimento onde possa contribuir com soluções técnicas eficientes, mantendo o foco na 'game feel' e na qualidade final da experiência do usuário.",
    profileImage: "/assets/images/about/profile02.jpg"
  },
  socials: [
    { platform: "Github", url: "https://github.com/mtdevdev", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/matheus-mar%C3%A7al-mtdev/", icon: "linkedin" },
    { platform: "Itch.io", url: "https://mtdeveloper.itch.io/", icon: "gamepad" },
    { platform: "Email", url: "mailto:mtdevdev@gmail.com", icon: "mail" }
  ],
  stack: [
    {
      category: "Núcleo & Scripts",
      icon: "code",
      items: "C# (Intermediário) / Python (Básico) / Lógica de Algoritmos"
    },
    {
      category: "Engines & Ferramentas",
      icon: "layers",
      items: "Unity 3D/2D / Unreal Engine / Git & GitHub"
    }
  ],
  projects: [
    {
      id: "splinteris",
      title: "SPLINTERIS",
      date: "DEZEMBRO 2025",
      engine: "Unity",
      description: "Shooter tático Top-Down onde a manipulação do tempo é a mecânica central: o mundo só avança quando o jogador se move.",
      longDescription: "Splinteris é um Top-Down Shooter focado em precisão e estratégia, desenvolvido para explorar a manipulação de 'Time Scale' em tempo real dentro da Unity. A arquitetura do jogo vincula a simulação de física e a animação dos inimigos à magnitude do vetor de movimento do jogador, criando um sistema de 'tempo tático'. Além do desafio de sincronização via DeltaTime, o projeto implementa uma câmera dinâmica que calcula um offset baseado na posição do cursor, permitindo ao jogador antecipar perigos fora do centro da tela.",
      link: "https://mtdeveloper.itch.io/splinteris",
      //repoLink: "https://github.com/mtdevdev",
      isAvailable: true,
      type: "image",
      coverImage: "/assets/projects/splinteris/cover.jpg",
      videoPreviewUrl: "/assets/projects/splinteris/preview.mp4",
      role: "Solo Developer",
      teamSize: "1 (Solo)",
      techHighlights: [
        "Time Scaling via Input",
        "Offset de Câmera Dinâmico",
        "Field of View (Raycast)",
        "IA de Inimigos (State Machine)"
      ],
      features: [
        "Sistema de Tempo Dinâmico",
        "Controle de Câmera Preditivo",
        "Combate de Alta Letalidade"
      ],
      gallery: [
        "/assets/projects/splinteris/screen1.png",
        "/assets/projects/splinteris/screen2.png",
        "/assets/projects/splinteris/screen3.png",
        "/assets/projects/splinteris/screen4.png",
        "/assets/projects/splinteris/screen5.png"
      ],
      /*codeSnippet: {
        title: "Input-Based Time Scaling",
        language: "csharp",
        code: `// Gerenciamento centralizado de escala de tempo baseado no input do jogador
public class TimeManager : MonoBehaviour {
    [SerializeField] private float minTimeScale = 0.05f;
    [SerializeField] private float transitionSpeed = 10f;
    
    private void Update() {
        // Verifica se há input de movimento (WASD)
        bool isMoving = Input.GetAxisRaw("Horizontal") != 0 || 
                        Input.GetAxisRaw("Vertical") != 0;

        float targetScale = isMoving ? 1f : minTimeScale;

        // Interpolação suave para evitar "stuttering" visual
        Time.timeScale = Mathf.Lerp(Time.timeScale, targetScale, 
                                  Time.unscaledDeltaTime * transitionSpeed);
        
        // Ajusta o pitch do áudio para corresponder ao tempo
        AudioManager.Instance.SetGlobalPitch(Time.timeScale);
    }
}`
      }*/
    },
    {
      id: "retro-rebound",
      title: "Retro Rebound",
      date: "JULHO 2025",
      engine: "Unity",
      description: "Pong multiplayer local com sistema de fases evolutivas baseadas na vida dos jogadores e efeitos visuais reativos.",
      longDescription: "Arcade competitivo local desenvolvido para explorar feedbacks visuais progressivos ('Juiciness'). A arquitetura gerencia três fases distintas de jogo controladas por eventos de vida, alterando dinamicamente o pós-processamento, a paleta de cores e o comportamento da câmera. O projeto destaca o uso avançado de Post-Processing Stack e shaders personalizados para transições de estilo (Pixel Art para Clean) em tempo real, além de um sistema de input flexível para dois jogadores no mesmo teclado.",
      link: "https://mtdeveloper.itch.io/retro-rebound",
      isAvailable: true,
      type: "image",
      coverImage: "/assets/projects/retro-rebound/cover.png",
      videoPreviewUrl: "/assets/projects/retro-rebound/preview.mp4",
      role: "Solo Developer",
      teamSize: "1 (Solo)",
      techHighlights: [
        "Sistema de Câmera Reativa",
        "Lógica Multiplayer Local",
        "Post-Processing Dinâmico",
        "Shader Graph (Pixelização)"
      ],
      features: [
        "Multiplayer Local Competitivo",
        "3 Fases Visuais Evolutivas",
        "Rotação Ambiental Dinâmica",
        "Customização de Cores em Runtime"
      ],
      gallery: [
         "/assets/projects/retro-rebound/screen1.png",
         "/assets/projects/retro-rebound/screen2.png"
      ],
      /*codeSnippet: {
        title: "Dynamic Camera Shake",
        language: "csharp",
        code: `public void TriggerShake(float intensity, float duration) {
    // Utiliza co-rotina para manipular o transform da câmera independentemente
    StartCoroutine(ShakeRoutine(intensity, duration));
}

private IEnumerator ShakeRoutine(float intensity, float duration) {
    Vector3 originalPos = transform.localPosition;
    float elapsed = 0f;

    while (elapsed < duration) {
        // Gera um offset randômico dentro de uma esfera unitária
        float x = Random.Range(-1f, 1f) * intensity;
        float y = Random.Range(-1f, 1f) * intensity;

        transform.localPosition = new Vector3(originalPos.x + x, originalPos.y + y, originalPos.z);
        
        elapsed += Time.deltaTime;
        yield return null;
    }
    
    transform.localPosition = originalPos;
}`
      }*/
    },
    {
      id: "galactic-paradox",
      title: "Galactic Paradox",
      date: "JULHO 2024",
      engine: "Godot",
      description: "Shooter rítmico circular desenvolvido na Godot 3, com ataques sincronizados manualmente.",
      longDescription: "Neste projeto desenvolvido na Godot 3, o jogador controla uma nave presa a uma órbita circular, devendo esquivar de ataques que vêm do centro ou das bordas. Diferente de jogos que utilizam análise de espectro de áudio em tempo real, aqui cada padrão de ataque foi posicionado manualmente ('hand-placed') para garantir sincronia perfeita com a música e melhor flow de gameplay. O jogo também conta com suporte nativo para controles de Xbox.",
      link: "https://mtdeveloper.itch.io/galactic-paradox",
      isAvailable: true,
      type: "image",
      coverImage: "/assets/projects/galactic-paradox/cover.jpg",
      videoPreviewUrl: "/assets/projects/galactic-paradox/preview.mp4",
      role: "Solo Developer",
      teamSize: "1 (Solo)",
      techHighlights: [
        "Godot 3 (GDScript)",
        "Lógica de Movimento Circular",
        "Sequenciamento de Padrões Manual",
        "Integração Controle Xbox"
      ],
      features: [
        "Mecânica de Movimento Circular",
        "Level Design Sincronizado Manualmente",
        "Suporte a Controle Xbox",
        "Estética Neon/Retro"
      ],
      gallery: [
         "/assets/projects/galactic-paradox/screen1.png",
         "/assets/projects/galactic-paradox/screen2.png",
         "/assets/projects/galactic-paradox/screen3.jpg",
         "/assets/projects/galactic-paradox/screen4.jpg",
         "/assets/projects/galactic-paradox/screen5.png"
      ],
      /*codeSnippet: {
        title: "Circular Orbit Movement",
        language: "gdscript",
        code: `extends KinematicBody2D

var radius = 200.0
var angle = 0.0
var speed = 4.0

func _physics_process(delta):
    var input = 0
    if Input.is_action_pressed("ui_left"):
        input = -1
    elif Input.is_action_pressed("ui_right"):
        input = 1
        
    # Atualiza o ângulo baseado no input e delta time
    angle += input * speed * delta
    
    # Converte coordenadas polares (ângulo/raio) para cartesianas (x/y)
    var target_pos = Vector2(cos(angle), sin(angle)) * radius
    
    # Aplica a rotação da nave para olhar para o centro (ou tangente)
    rotation = angle + PI/2
    position = target_pos`
      }*/
    }
  ],
  education: [
    {
      school: "Estação Dona Catarina",
      degree: "Ensino Médio Técnico em Administração",
      date: "Fev 2023 - Dez 2025",
      achievements: [
        "Aluno Destaque (2025)",
        "Maior número de atividades realizadas (2024)",
        "Certificado de Assiduidade"
      ]
    }
  ],
  certificates: [
    {
      name: "Create with Code",
      issuer: "Unity",
      date: "Jan 2026",
      link: "#"
    },
    {
      name: "Level 3 GameDev (Godot, Unity & Unreal)",
      issuer: "SuperGeeks",
      date: "Jan 2024 - Dez 2025",
      link: "#"
    },
    {
      name: "Scratch: Developing Games",
      issuer: "Alura",
      date: "Out 2023",
      link: "#"
    }
  ],
  languages: [
    {
      name: "Português",
      level: "Nativo"
    },
    {
      name: "Inglês",
      level: "Intermediário"
    }
  ]
};
