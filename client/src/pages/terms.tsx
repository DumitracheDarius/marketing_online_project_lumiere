import { Layout } from "@/components/layout";

export default function Terms() {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-medium mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Welcome to Lumière. These terms and conditions outline the rules and regulations for the use of Lumière's Website, located at lumiere-project.netlify.app.
            </p>

            <h2 className="text-foreground">1. Introduction</h2>
            <p>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Lumière if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-foreground">2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, Lumière and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>

            <h2 className="text-foreground">3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
              <li>Publishing any Website material in any other media.</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
              <li>Publicly performing and/or showing any Website material.</li>
              <li>Using this Website in any way that is or may be damaging to this Website.</li>
              <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
            </ul>

            <h2 className="text-foreground">4. Your Content</h2>
            <p>
              In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Lumière a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
            </p>

            <h2 className="text-foreground">5. No warranties</h2>
            <p>
              This Website is provided “as is,” with all faults, and Lumière express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
            </p>

            <h2 className="text-foreground">6. Limitation of liability</h2>
            <p>
              In no event shall Lumière, nor any of its officers, directors and employees, including founders Radu Maria-Cristina and Porumboiu Diana, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. 
            </p>
            
            <h2 className="text-foreground">7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the State of California, and you submit to the non-exclusive jurisdiction of the state and federal courts located in California for the resolution of any disputes.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
