"use client";

import appSettings from "@/constants/settings.constants";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogBody } from "@/components/ui/dialog";

type Project = {
    name: string;
    description: string;
    status: string;
    link?: string;
};

const projectList: Project[] = [
    { name: "Secret Terminal", description: "A crypto app", status: "Active", link: "https://www.secretterminal.com/" },
    { name: "Service JS", description: "Reusable Components and Services", status: "In Development" },
    { name: "Letter Terminal", description: "A note-taking app", status: "Planned" },
    { name: "Screen Trunk", description: "A movie and TV show app", status: "Planned" },
];

export default function Home() {
    const [showOurProductsDialog, setShowOurProductsDialog] = useState<boolean>(false);

    return (
        <>
            <section className="flex h-[calc(100vh-100px)] flex-col items-center justify-center p-8 text-center">
                <h1 className="mb-4 text-4xl font-bold sm:text-7xl">{appSettings.name}</h1>
                <p className="mb-8 max-w-150 text-foreground sm:text-base">{appSettings.description}</p>

                <Button
                    onClick={() => {
                        setShowOurProductsDialog(true);
                    }}
                >
                    Our Products
                </Button>
            </section>

            <Dialog
                open={showOurProductsDialog}
                onOpenChange={setShowOurProductsDialog}
            >
                <DialogContent size="sm">
                    <DialogHeader>
                        <DialogTitle>
                            Products
                            <DialogDescription className="text-[11px] m-[4px_0px] sr-only">
                                Products Dialog
                            </DialogDescription>
                        </DialogTitle>
                    </DialogHeader>

                    <DialogBody>
                        <div className="project-container">
                            {projectList.map((project) => {
                                return (
                                    <section className="group">
                                        <div>
                                            <h5 className="heading">
                                                {project.link ? (
                                                    <a
                                                        href={(project.link as string) ?? "#"}
                                                        target="_blank"
                                                    >
                                                        {project.name}
                                                        <ExternalLink size={14} />
                                                    </a>
                                                ) : (
                                                    project.name
                                                )}
                                            </h5>

                                            <div className="group-content">{project.description}</div>
                                        </div>

                                        <div
                                            className={`font-semibold text-[12px] ${
                                                project.status === "Active"
                                                    ? "text-[var(--color-green-600)]"
                                                    : project.status === "In Development"
                                                      ? "text-[var(--color-yellow-600)]"
                                                      : project.status === "Planned"
                                                        ? "text-[var(--color-gray-400)]"
                                                        : ""
                                            }`}
                                        >
                                            {project.status}
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    </DialogBody>
                </DialogContent>
            </Dialog>
        </>
    );
}
