import React, {useEffect, useRef, useState} from 'react';

// Maserati model

const MODEL_UID = "19f04b255c3849c3ab3b1238ec531640";

//const MODEL_UID = "e8a0dcd94c4142238a606ff5ec34c5ab";
// const MODEL_UID = "c632823b6c204797bd9b95dbd9f53a06";

const useSketchfabViewer = () => {
    // Cette référence contiendra l'objet iframe réel
    const viewerIframeRef = useRef(null);
    const [api, setApi] = useState();

    const ViewerIframe = (
        <iframe
            // Je transmets la référence au composant iframe pour obtenir underlying DOM object
            className="frame"
            ref={viewerIframeRef}
            title="sketchfab-viewer"
        />
    );

    useEffect(
        () => {
            // Initialiser le viewer
            let client = new window.Sketchfab(viewerIframeRef.current);
            client.init(MODEL_UID, {
                success: setApi,
                error: () => {
                    console.log("Viewer error");
                },
            });
        },
        // Je veux seulement initialiser le viewer au premier chargement
        // donc je n'ajoute aucune dépendance à useEffect
        []
    );

    return [ViewerIframe, api];
};

export const Viewer = ({ apiRef }) => {
    const [ViewerIframe, api] = useSketchfabViewer();

    apiRef.current = api;

    return ViewerIframe;
};

export default Viewer;