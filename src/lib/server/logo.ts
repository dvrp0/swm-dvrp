export function getLogoCount(): number
{
    const globs = import.meta.glob("../../../static/images/logo-*.png", { eager: true });

    return Object.entries(globs).length;
}