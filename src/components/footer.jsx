import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export function Footer() {
    return (
        <section className="flex h-full items-center mt-auto">
            <footer className="bg-transparent w-full items-center flex justify-between dark:text-primary-color border-t-2
            border-black py-4 dark:border-primary-color">
                <div className="">
                    <h1 className="font-text-alt font-bold">By <span className="text-xl font-titulos font-extrabold">
                        Future
                    </span>
                    </h1>
                </div>
                <div className="flex gap-3">
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="xl"
                    />
                    <FontAwesomeIcon
                        icon={faInstagram}
                        size="xl"
                    />
                    <FontAwesomeIcon
                        icon={faTwitter}
                        size="xl"
                    />
                </div>
            </footer>
        </section>

    )
}