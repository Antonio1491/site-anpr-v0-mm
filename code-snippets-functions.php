<?php
/**
 * ANPR Landing Page - Code Snippets Version
 * Pegar en: Plugins → Code Snippets → Add New
 * O en functions.php del tema hijo
 */

// Prevenir ejecución directa
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Registrar shortcode para la landing page completa
 */
function anpr_landing_shortcode($atts) {
    // Atributos por defecto
    $atts = shortcode_atts(array(
        'section' => 'all', // all, hero, details, experts, etc.
        'style' => 'default'
    ), $atts);
    
    ob_start();
    
    // CSS inline para evitar conflictos
    echo '<style>
        /* ANPR Styles - Inline para evitar conflictos */
        .anpr-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .anpr-hero { background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%201%20copia.jpg-QOgckoacDmghIK2oKC0IAXouaj1X7h.jpeg"); background-size: cover; background-position: center; min-height: 100vh; display: flex; align-items: center; justify-content: center; color: white; text-align: center; }
        .anpr-hero h1 { font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 700; margin-bottom: 2rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); }
        .anpr-cta-btn { display: inline-block; background: #012787; color: white; padding: 1.5rem 3rem; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1.2rem; margin: 2rem 0; transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .anpr-cta-btn:hover { background: #d2dd0a; color: #012787; transform: translateY(-5px); text-decoration: none; }
        .anpr-section { padding: 80px 20px; }
        .anpr-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .anpr-card { background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; transition: transform 0.3s ease; }
        .anpr-card:hover { transform: translateY(-10px); }
        .anpr-expert-img { width: 120px; height: 120px; border-radius: 50%; margin: 0 auto 1rem; background: #012787; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem; }
        @media (max-width: 768px) { .anpr-hero h1 { font-size: 2rem; } .anpr-cta-btn { padding: 1rem 2rem; font-size: 1rem; } }
    </style>';
    
    if ($atts['section'] === 'all' || $atts['section'] === 'hero') {
        echo anpr_hero_section();
    }
    
    if ($atts['section'] === 'all' || $atts['section'] === 'details') {
        echo anpr_details_section();
    }
    
    if ($atts['section'] === 'all' || $atts['section'] === 'experts') {
        echo anpr_experts_section();
    }
    
    if ($atts['section'] === 'all' || $atts['section'] === 'contact') {
        echo anpr_contact_section();
    }
    
    return ob_get_clean();
}
add_shortcode('anpr_landing', 'anpr_landing_shortcode');

/**
 * Sección Hero
 */
function anpr_hero_section() {
    return '
    <section class="anpr-hero">
        <div class="anpr-container">
            <h1>Fortaleciendo la Gestión de <span style="color: #d2dd0a;">Parques y Espacios Públicos</span></h1>
            <div style="background: rgba(1,39,135,0.8); padding: 1rem 2rem; border-radius: 50px; margin: 2rem 0; display: inline-block;">
                <strong style="color: #d2dd0a;">3° Jornada ANPR México - Chihuahua</strong>
            </div>
            <p style="font-size: 1.3rem; margin: 2rem 0; max-width: 800px; margin-left: auto; margin-right: auto;">
                Evento gratuito con conferencias impartidas por <strong>expertos líderes del sector</strong> 
                y espacios de networking para impulsar la transformación de nuestros parques.
            </p>
            <a href="https://anpr.org.mx/register/3-jornada-de-capacitacion-chihuahua/" 
               target="_blank" 
               class="anpr-cta-btn">
                Regístrate Gratis Aquí →
            </a>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 3rem; max-width: 800px; margin-left: auto; margin-right: auto;">
                <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 10px; backdrop-filter: blur(10px);">
                    📅 <strong>3 de Septiembre</strong>
                </div>
                <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 10px; backdrop-filter: blur(10px);">
                    🕘 <strong>9:00 AM - 3:00 PM</strong>
                </div>
                <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 10px; backdrop-filter: blur(10px);">
                    🎫 <strong>Evento Gratuito</strong>
                </div>
            </div>
        </div>
    </section>';
}

/**
 * Sección Detalles
 */
function anpr_details_section() {
    return '
    <section class="anpr-section" style="background: #f9fafb;">
        <div class="anpr-container">
            <h2 style="text-align: center; font-size: 3rem; color: #012787; margin-bottom: 3rem;">Detalles del Evento</h2>
            <div class="anpr-grid">
                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                    <div style="width: 60px; height: 60px; background: #012787; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                        📍
                    </div>
                    <div>
                        <h3 style="color: #012787; margin: 0 0 0.5rem 0;">Ubicación</h3>
                        <p style="color: #6b7280; margin: 0;">Parque Metropolitano Tres Presas<br>Chihuahua, Chihuahua</p>
                    </div>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                    <div style="width: 60px; height: 60px; background: #012787; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                        👥
                    </div>
                    <div>
                        <h3 style="color: #012787; margin: 0 0 0.5rem 0;">Aforo</h3>
                        <p style="color: #6b7280; margin: 0;">50 personas ¡Cupo limitado!</p>
                    </div>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                    <div style="width: 60px; height: 60px; background: #012787; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                        ✅
                    </div>
                    <div>
                        <h3 style="color: #012787; margin: 0 0 0.5rem 0;">Incluye</h3>
                        <p style="color: #6b7280; margin: 0;">Ponencias y recorrido en el Parque Metropolitano Tres Presas</p>
                    </div>
                </div>
            </div>
        </div>
    </section>';
}

/**
 * Sección Expertos
 */
function anpr_experts_section() {
    return '
    <section class="anpr-section">
        <div class="anpr-container">
            <h2 style="text-align: center; font-size: 3rem; color: #012787; margin-bottom: 3rem;">Conoce a los Expertos</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                <div class="anpr-card">
                    <div class="anpr-expert-img">IV</div>
                    <h3 style="color: #012787;">Isabel Velázquez</h3>
                    <p style="color: #6b7280; margin: 0.5rem 0;">Directora General</p>
                    <p style="color: #9ca3af; margin: 0;">Parques de México</p>
                </div>
                <div class="anpr-card">
                    <div class="anpr-expert-img">LR</div>
                    <h3 style="color: #012787;">Luis Romahn</h3>
                    <p style="color: #6b7280; margin: 0.5rem 0;">Director Ejecutivo</p>
                    <p style="color: #9ca3af; margin: 0;">World Urban Parks</p>
                </div>
                <div class="anpr-card">
                    <div class="anpr-expert-img">MP</div>
                    <h3 style="color: #012787;">Manuel Plascencia</h3>
                    <p style="color: #6b7280; margin: 0.5rem 0;">Director General</p>
                    <p style="color: #9ca3af; margin: 0;">Grupo BUGY</p>
                </div>
                <div class="anpr-card">
                    <div class="anpr-expert-img">VM</div>
                    <h3 style="color: #012787;">Vitoria Martín</h3>
                    <p style="color: #6b7280; margin: 0.5rem 0;">Directora General</p>
                    <p style="color: #9ca3af; margin: 0;">ANPR México</p>
                </div>
                <div class="anpr-card">
                    <div class="anpr-expert-img">TJ</div>
                    <h3 style="color: #012787;">Tania Jaime</h3>
                    <p style="color: #6b7280; margin: 0.5rem 0;">Directora de Recreación</p>
                    <p style="color: #9ca3af; margin: 0;">San Pedro + Parques</p>
                </div>
            </div>
        </div>
    </section>';
}

/**
 * Sección Contacto
 */
function anpr_contact_section() {
    return '
    <section class="anpr-section" style="background: #012787; color: white;">
        <div class="anpr-container" style="text-align: center;">
            <h2 style="color: white; font-size: 3rem; margin-bottom: 2rem;">Forma Parte del Cambio</h2>
            <p style="font-size: 1.3rem; margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                Inscríbete sin costo y acompáñanos en esta jornada que impulsa la transformación de los espacios públicos.
            </p>
            <a href="https://anpr.org.mx/register/3-jornada-de-capacitacion-chihuahua/" 
               target="_blank" 
               style="display: inline-block; background: white; color: #012787; padding: 1.5rem 3rem; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1.2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transition: all 0.3s ease;"
               onmouseover="this.style.background=\'#d2dd0a\'"
               onmouseout="this.style.background=\'white\'">
                Inscríbete Ahora
            </a>
        </div>
    </section>';
}

/**
 * Agregar Google Fonts
 */
function anpr_add_google_fonts() {
    wp_enqueue_style('anpr-google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap', array(), null);
}
add_action('wp_enqueue_scripts', 'anpr_add_google_fonts');
?>
