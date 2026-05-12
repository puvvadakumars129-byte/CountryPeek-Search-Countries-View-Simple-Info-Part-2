/* ── Header ── */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 64px;
  background-color: #2563eb;
  color: #fff;
}

.header__brand {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.header__nav {
  display: flex;
  gap: 1.5rem;
  font-weight: 600;
  font-size: 0.95rem;
}

.header__nav a:hover {
  text-decoration: underline;
}

/* ── Search Bar ── */
.search-bar {
  padding: 2rem 2rem 1rem;
}

.search-bar__input {
  width: 100%;
  max-width: 480px;
  padding: 0.65rem 1rem;
  font-size: 1rem;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s;
}

.search-bar__input:focus {
  border-color: #2563eb;
}

/* ── Home ── */
.home {
  padding: 0 2rem 2rem;
}

.home__status {
  padding: 1rem 0;
  color: #94a3b8;
  font-size: 0.95rem;
}

.home__status--error {
  color: #dc2626;
}

/* ── Cards Grid ── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

/* ── Country Card ── */
.card {
  display: block;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  color: inherit;
  text-decoration: none;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.14);
}

.card__flag {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}

.card__body {
  padding: 1rem;
}

.card__name {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.75rem;
}

.card__body p {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0.3rem 0;
}

.card__body p span {
  font-weight: 600;
  color: #475569;
}

/* ── 404 Not Found ── */
.not-found {
  padding: 4rem 2rem;
  text-align: center;
}

.not-found h2 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.not-found p {
  color: #64748b;
  margin-bottom: 1.5rem;
}

.not-found a {
  display: inline-block;
  padding: 0.6rem 1.4rem;
  background-color: #2563eb;
  color: #fff;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.2s;
}

.not-found a:hover {
  background-color: #1d4ed8;
}
