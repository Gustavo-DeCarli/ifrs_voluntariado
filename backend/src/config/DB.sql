CREATE DATABASE IF NOT EXISTS projeto_jwt_db CHARACTER SET utf8mb4 COLLATE
utf8mb4_unicode_ci;

USE projeto_jwt_db;

CREATE TABLE IF NOT EXISTS users (
 id INT AUTO_INCREMENT PRIMARY KEY,
 email VARCHAR(255) NOT NULL UNIQUE,
 password VARCHAR(255) NOT NULL,
 role VARCHAR(50) NOT NULL DEFAULT 'user',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (email, password, role) VALUES
('usuario@ifrs.edu.br',
'$2b$10$382cEJJYi5YxSBNvWmufHeoPHX3dqIB9NP2R2XWzt/w.DnC0gmCr2', 'user'),
('admin@ifrs.edu.br',
'$2b$10$/JLXJ62EBlk1bNq0xmpvMuTLDJb6AWmZUs74lgEJb4Z.J9.3kFJM.', 'admin');

CREATE TABLE IF NOT EXISTS events (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(255) NOT NULL,
 data date NOT NULL
);

INSERT INTO events (id, nome, data) VALUES
(null, 'Passeata 7 de setembro', '2025-10-05'),
(null, 'Corrida de cariola', '2025-12-15'),
(null, 'Passeata de Cachorros', '2025-11-11'),
(null, 'Circo de Palhaços', '2026-01-29'),
(null, 'Corrida de Hotwaheels', '2025-12-22'),
(null, 'Corrida de Natal', '2025-12-24');

CREATE TABLE IF NOT EXISTS subsevents (
 id INT AUTO_INCREMENT PRIMARY KEY,
 idEvent INT NOT NULL,
 idUser INT NOT NULL
);