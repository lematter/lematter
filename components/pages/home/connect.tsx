import { getTranslations } from "next-intl/server";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/terminal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export async function Connect() {
  const t = await getTranslations("Home.connect");

  return (
    <section
      id="connect"
      className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24"
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {t("heading")}
      </h2>
      <p className="mt-3 max-w-xl text-muted-foreground text-balance">
        {t("subtitle")}
      </p>

      <Tabs
        defaultValue="cli"
        className="mt-10 w-full max-w-xl items-center"
      >
        <TabsList>
          <TabsTrigger value="cli">{t("tabs.cli")}</TabsTrigger>
          <TabsTrigger value="sdk">{t("tabs.sdk")}</TabsTrigger>
          <TabsTrigger value="mcp">{t("tabs.mcp")}</TabsTrigger>
        </TabsList>

        {/* CLI */}
        <TabsContent value="cli" className="mt-6 w-full">
            <Terminal className="mx-auto max-w-xl text-left">
              <TypingAnimation className="text-foreground">
                $ npm i -g @lematter/cli
              </TypingAnimation>
              <AnimatedSpan className="text-muted-foreground">
                → Installed lematter CLI
              </AnimatedSpan>
              <TypingAnimation className="text-foreground">
                $ lematter ask &quot;CRISPR off-target effects&quot;
              </TypingAnimation>
              <AnimatedSpan className="text-primary">
                ✓ Answer grounded in 5 sources, each with a citation
              </AnimatedSpan>
            </Terminal>
          </TabsContent>

        {/* SDK */}
        <TabsContent value="sdk" className="mt-6 w-full">
          <Terminal className="mx-auto max-w-xl text-left">
              <TypingAnimation className="text-foreground">
                $ npm i @lematter/sdk
              </TypingAnimation>
              <AnimatedSpan className="text-muted-foreground">
                import {"{"} Lematter {"}"} from &quot;@lematter/sdk&quot;
              </AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground">
                const lematter = new Lematter()
              </AnimatedSpan>
              <TypingAnimation className="text-foreground">
                await lematter.ask(&quot;CRISPR off-target effects&quot;)
              </TypingAnimation>
              <AnimatedSpan className="text-primary">
                ✓ Returns a grounded answer with citations
              </AnimatedSpan>
            </Terminal>
          </TabsContent>

        {/* MCP */}
        <TabsContent value="mcp" className="mt-6 w-full">
          <Terminal className="mx-auto max-w-xl text-left">
              <TypingAnimation className="text-foreground">
                $ npx -y @lematter/mcp
              </TypingAnimation>
              <AnimatedSpan className="text-muted-foreground">
                → Connecting to Lematter (Model Context Protocol)...
              </AnimatedSpan>
              <AnimatedSpan className="text-primary">
                ✓ Connected — 3 tools, 1 resource available
              </AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground">
                tools: search_literature · query_knowledge_graph · synthesize
              </AnimatedSpan>
              <TypingAnimation className="text-muted-foreground">
                Your agent is now connected to Lematter.
              </TypingAnimation>
            </Terminal>
          </TabsContent>
      </Tabs>
    </section>
  );
}
