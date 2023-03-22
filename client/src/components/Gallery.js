import { CatalogItem } from "./CatalogItem";

export const Gallery = ({
    games,
}) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
            
            {games.map(x =>
                <CatalogItem key={x._id} {...x} />
            )}

            
        </section>
    );
};